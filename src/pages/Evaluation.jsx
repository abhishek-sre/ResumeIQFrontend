import { useState } from "react";
import { sendRequestForAi } from "../services/aiRequestApi";
import ProgressBar from "../component/home/ProgressBar";
import mammoth from "mammoth";
import ScoreRing from "../component/home/ScoreRing";
import Loader from "../component/common/Loader";
const Evaluation = () => {

    const [formValue,setFormValue] =useState({
        resumeText:"",
        fileInput:null
    })
    const [validationError,setValidationError] =useState({})
    const [result,setResult] =useState([])
    const [resError,setResError] =useState('')
    const [loading,setLoading] = useState(false)

    const handelToChange = async (e) => {
        const { name, value, files } = e.target;

        if (name === "fileInput") {
            const file = files?.[0];

            if (!file) return;

            const arrayBuffer = await file.arrayBuffer();

            const result = await mammoth.extractRawText({
                arrayBuffer
            });

            setFormValue((prev) => ({
                ...prev,
                fileInput: result.value
            }));

            return;
        }

        setFormValue((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handelToSumit=async(e)=>{
        e.preventDefault()
        const validationCheck = formValidation(formValue)
        if(Object.keys(validationCheck).length===0){
            setLoading(true)
            try {
              const data = {
                  resumeText: formValue.resumeText,
                  fileData: formValue.fileInput
              };
              const resp = await sendRequestForAi(data)
              if(resp.success){
                setResult(resp?.data)
              }
              setLoading(false)
            } catch (error) {
                setResError(error.message)
                setLoading(false)
            } finally{
              setLoading(false)
            }
        }
    }

    const formValidation=(formValue)=>{
        const error = {}
        if(!formValue.resumeText){
            error.resumeError="Input field is required!"
        }
        setValidationError(error)
        return error
    }

  return (
    <>
      <div className="analyzer-root">
        {/* <!-- ====== HEADER ====== --> */}
        <div className="header">
          <span className="header-icon">
            <i className="fas fa-file-alt"></i>
          </span>
          <h1>Resume Analyzer</h1>
        </div>
        <div className="subhead">
          <i className="fas fa-robot"></i> Upload your resume · get AI-powered score & insights
        </div>

        {/* <!-- ====== INPUT CARD ====== --> */}
        <form onSubmit={handelToSumit} encType="multipart/form-data">
            <div className="input-card">
                <textarea 
                className={validationError.resumeError ? "errorClass" : ""}
                onChange={handelToChange}
                name="resumeText" 
                defaultValue={formValue.resumeText} 
                placeholder={validationError.resumeError ? validationError.resumeError : "Paste the job description you want to evaluate your resume against. ResumeIQ will analyze the JD, compare it with your resume, and provide a match score showing how valuable and relevant your CV is for the role."}>
                </textarea>
                <div className="action-row">
                    <label htmlFor="fileInput" className="upload-btn">
                        <i className="fas fa-cloud-upload-alt"></i> Upload .txt
                    </label>
                    <input type="file" className="inputFiles" name="fileInput"  onChange={handelToChange}/>
                    
                    <button className="analyze-btn" type="submit">
                        <i className="fas fa-microchip"></i> Analyze
                    </button>
                    
                </div>
            </div>
        </form>
        {loading ? (
          <Loader />
        ) : (
          <div className="score-panel" id="scorePanel">
              {result ? (
                <>
                  <div className="score-header">
                  <h2>
                    <i className="fas fa-chart-pie"></i> Analysis Report
                  </h2>
                  <div className="badge">
                    {
                      result.selectionRecommendation === "Rejected" ? (
                        <>
                          <i className="fas fa-times"></i>
                          <span id="overallLabel">Ready</span>
                        </>
                      ) : (
                        <>
                          {
                            result.selectionRecommendation === "Selected" ? 
                            (
                            <i className="fas fa-check"></i>
                            ) 
                            : 
                            (
                              <i className="fas fa-thumbs-up"></i>
                            ) 
                          }
                        </> 
                      )
                    }
                    <span id="overallLabel">{result.selectionRecommendation}</span>
                  </div>
                </div> 
      
                <div className="score-row">
                  <div className="">
                    <ScoreRing score={result?.matchScore ? result.matchScore : 0} label="" />
                    <p>ATS Score</p>
                  </div>
                  
                  <div className="stats">
                    <div className="stat-item">
                      <i className="fas fa-check-circle"></i> ATS Compatibility
                      <span className="defaultValue">
                      {result?.atsScore ? result?.atsScore : "0"} %
                      </span>
                    </div>
                    <div className="stat-item">
                      <i className="fas fa-brain"></i> Impact & Achievements
                      <span className="defaultValue" >
                      {result?.atsScore ? result?.atsScore : "0"} %
                      </span>
                    </div>
                    <div className="stat-item">
                      <i className="fas fa-clock"></i> Formatting 
                      <span className="defaultValue">
                        {result?.atsScore ? result?.atsScore : "0"} % 
                      </span>
                    </div>
                  </div>
                </div>

                <div className="personalDetails">
                    <div className="personalinfo">
                      <span><b>Name</b> : {result?.name ? result.name : "Full Name"}</span>
                    </div>
                    <div className="personalinfo">
                      <span><b>Email</b> : {result?.email ? result.email : "email@email.com"}</span>
                    </div>
                    <div className="personalinfo">
                      <span><b>Phone</b> : {result?.phone ? result.phone : "XXXXXXXXXX"}</span>
                    </div>
                    <div className="personalinfo">
                      <span><b>Summary</b> : {result?.summary ? result.summary : "Candidates profile summary"}</span>
                    </div>
                    <div className="personalinfo">
                      <span><b>Profile Review</b> : {result?.resion ? result.resion : "Candidates profile summary"}</span>
                    </div>
                </div>

                <div className="progress-area">
                  <div className="progress-meta">
                    <span>
                      <i className="fas fa-tag" style={{ "marginRight": "6px" }}></i>
                      Match quality
                    </span>
                    <span id="matchPercent">{result?.matchScore ? result?.matchScore : "0"} % </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      id="progressFill"
                      style={{ width: `${result?.matchScore}%` }}
                    ></div>
                  </div>
                  <div className="tag-group" id="skillTags">
                    {
                      result?.matchedSkills?.map((item,index)=>{
                        return(
                            <span className="tag" key={index}> <i className="fas fa-plus-circle"></i> {item}</span>
                        )
                      })
                    }
                  </div>
                </div>
                </>
              ) : ""}
            </div>
          )}    
      </div>
    </>
  );
};
export default Evaluation;


import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundImage: 'url("/landing.png")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          className="w-50 p-5 rounded text-light text-center"
        >
          <h1>
            Designed To Get Hired. Your Skills, Your Next Job - All In One.
          </h1>
          <Link
            to={"/steps"}
            style={{ backgroundColor: "#755846" }}
            className="btn text-light mt-3"
          >
            Make Your Resume With AI
          </Link>
        </div>
      </div>

      {/* about */}
      <div className="container my-5">
        <h1 className="text-center mb-5">What's AI rBuilder</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <p style={{ textAlign: "justify" }}>
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems.
            </p>
            <p style={{ textAlign: "justify" }}>
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
            </p>
            <p style={{ textAlign: "justify" }}>
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.
            </p>
            <p style={{ textAlign: "justify" }}>
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img
              width={"100%"}
              height={"550px"}
              src="./resume.png"
              alt="resume"
            />
          </div>
        </div>
      </div>
      {/* banner */}
      <div
        style={{
          height: "80vh",
          backgroundImage: 'url("/team.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
      {/* testimony */}
      <div className="container my-5">
        <h1 className="text-center mb-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Trusted by professionals worldwide.</h5>
            <p style={{ textAlign: "justify" }}>
              At rBuilder, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>
            <p style={{ textAlign: "justify" }}>
              In fact, users who used rBuilder reported getting hired an average
              of 48 days faster.
            </p>
            <p style={{ textAlign: "justify" }}>
              Join thousands of job-seekers who’ve fast-tracked their careers
              with a résumé that truly stands out
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-olly-712513.jpg&fm=jpg"
                  alt="user"
                />
               </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://tse2.mm.bing.net/th/id/OIP.fLbEqYzBQOBQhPdwLdA62gHaHa?r=0&w=1060&h=1060&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://th.bing.com/th/id/OIP._DoTgd-odnwHWjuxBbvn-QHaGf?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://tse2.mm.bing.net/th/id/OIP.09_2WV28qq790AzsNv4WxAAAAA?r=0&w=450&h=450&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://th.bing.com/th/id/R.a352915fa0c674d3c783484265f1b158?rik=5COHjhfEo8%2f1rg&riu=http%3a%2f%2fwww.thesmileteam.co.uk%2fwp-content%2fuploads%2f2016%2f08%2fteam_0000_Bindiya-Thakrar.jpg&ehk=%2fLBg60ZyoGsPI9Bfxq9mOlWAa29Nez5%2fNVCL98fdWt4%3d&risl=&pid=ImgRaw&r=0"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://tse1.mm.bing.net/th/id/OIP.1V51gMp0VACp7O5xO-5QvAHaGU?r=0&pid=ImgDet&w=474&h=404&rs=1&o=7&rm=3"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://sid.onlinelibrary.wiley.com/cms/asset/f190514a-4d23-4157-b429-29f8f744882f/jsid2012-gra-0008-m.jpg"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://imgcdn.stablediffusionweb.com/2025/10/2/2ce569f0-1854-4807-92fd-953e5de3f06e.jpg"
                  alt="user"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="img-fluid p-2"
                  src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
}

export default Home; 
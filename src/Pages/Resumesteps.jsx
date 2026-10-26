import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5"
import { FaDownload } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Resumesteps() {
  return (
    <>
      <div style={{ minHeight: '90vh' }} className="mt-5">

        <h1 className="text-center">
          Create an ATS friendly Resume in minutes with AI
        </h1>

        <div className="container mt-5">
          <div className="row">

          <div className="col-md-1"></div>

            {/* Step 1 */}
            <div className="col-md-4 rounded p-5 shadow text-center">
              <IoDocumentTextSharp className="fs-1 text-primary mb-3" />

            <h4>ADD YOUR DETAILS</h4>

              <p>OUR AI WILL GENERATE SKILLS & SUMMARY</p>

              <h4>Step 1</h4>
            </div>

            <div className="col-md-2"></div>

            {/* Step 2 */}
            <div className="col-md-4 rounded p-5 shadow text-center">
              <FaDownload className="fs-1 text-danger mb-3" />

              <h4>DOWNLOAD YOUR RESUME</h4>

            <p>Download CV as PDF and start applying</p>

              <h5>Step 2</h5>
            </div>

            <div className="col-md-1"></div>

          </div>

          <div className="mt-5 text-center">
            <Link
              to="/from"
              style={{ backgroundColor: "#755846cb" }}
              className="btn text-light"
            >
              LETS START
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}              
export default Resumesteps   
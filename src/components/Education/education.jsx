import './education.css'
export const Education = () => {
  return (
    <div className='educationContainer fontFam-regular' id='education'>
      <h2>
        <span>Fayoum University | 2018 - 2023</span>
        <p>Bachelor`s Degree in Computer Systems Engineering | Grade:
          <span>Very good (80.01%)</span>
        </p>
        <p>Relevant Coursework: Software Engineering, Network Architecture, Database
          Systems,web development
        </p>
        <p>Graduate Project:
          <span>“SIMA- Securing IoT Devices Against Malicious Attacks”</span>
        </p>
        <ul>
          <li>Implemented advanced encryption and authentication protocols to enhance
            device resilience.</li>
          <li>Designed and tested intrusion detection systems tailored for IoT environments.</li>
          <li>Conducted thorough risk assessments and vulnerability analyses of common IoT
            architectures.</li>
          <li>Demonstrated the project`s effectiveness through simulated attack scenarios
            and performance metrics.</li>
        </ul>
      </h2>
      <img src='images\FayoumUniLogo.png' className='uniLogo'></img>
      <div className='eduTitleContainer'>
        <div className='eduTitle_1'>
          <h1>
            <strong>EDUCATION. EDUCATION. EDUCATION. EDUCATION. EDUCATION. EDUCATION.
              EDUCATION. EDUCATION. EDUCATION. EDUCATION.</strong>
          </h1>
        </div>
        <div className='eduTitle_2'>
          <h1>
            <strong>EDUCATION. EDUCATION. EDUCATION. EDUCATION. EDUCATION. EDUCATION.
              EDUCATION. EDUCATION. EDUCATION. EDUCATION.</strong>
          </h1>
        </div>
      </div>

    </div>
  )
}
















// App.js functional code 
import React, { useState } from 'react';
import './App.css';
import congratsGif from './giphy.gif';
import bgPic from './bgpic.jpg';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [degree, setDegree] = useState('');
  const [branch, setBranch] = useState('');
  const [campus, setCampus] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's assume successful login
    setLoggedIn(true);
  };

  const handleMarkAttendance = () => {
    // Implement attendance marking logic
    setShowCongrats(true);
    setTimeout(() => {
      setShowCongrats(false);
      setShowPopup(true);
    }, 3000);
    setAttendanceMarked(true);
  };

  const handlePopupOk = () => {
    setShowPopup(false);
    setLoggedIn(false); // Log out the user
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bgPic})` }}>
      {!loggedIn ? (
        <div className="login-container">
          <h1>Welcome to the Academic Attendance Portal</h1>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Registration Number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          >
            <option value="">Select Degree</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MS">MS</option>
          </select>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Chemical">Chemical</option>
            <option value="IT">IT</option>
            <option value="Civil">Civil</option>
          </select>
          <select
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            required
          >
            <option value="">Select Campus</option>
            <option value="KTR">KTR</option>
            <option value="VDP">VDP</option>
            <option value="RMP">RMP</option>
            <option value="Modi">Modi</option>
          </select>
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="attendance-container">
          <h1>Hello, {userName}!</h1>
          <p>Registration Number: {registrationNumber}</p>
          <p>Degree: {degree}</p>
          <p>Branch: {branch}</p>
          <p>Campus: {campus}</p>
          <p>Mobile Number: {mobileNumber}</p>
          {!attendanceMarked ? (
            <button className="mark-button" onClick={handleMarkAttendance}>
              Mark Present
            </button>
          ) : (
            <p>Attendance marked! Thanks for being punctual.</p>
          )}
        </div>
      )}
      {showCongrats && <img src={congratsGif} alt="Congrats" className="congrats-gif" />}
      {showPopup && (
        <div className="popup">
          <p>You have been marked present!</p>
          <button className="ok-button" onClick={handlePopupOk}>OK</button>
        </div>
      )}
    </div>
  );
}

export default App;




































































































// import React, { useState } from 'react';
// import './App.css';
// import congratsGif from './giphy.gif';
// import bgPic from './bgpic.jpg';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [degree, setDegree] = useState('');
//   const [branch, setBranch] = useState('');
//   const [campus, setCampus] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [attendanceMarked, setAttendanceMarked] = useState(false);
//   const [showCongrats, setShowCongrats] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleLogin = () => {
//     // Implement your authentication logic here
//     // For simplicity, let's assume successful login
//     setLoggedIn(true);
//   };

//   const handleMarkAttendance = () => {
//     // Implement attendance marking logic
//     setShowCongrats(true);
//     setTimeout(() => {
//       setShowCongrats(false);
//       setShowPopup(true);
//     }, 3000);
//   };

//   const handlePopupOk = () => {
//     setShowPopup(false);
//     // Redirect to login page or perform other actions
//   };

//   return (
//     <div className="App" style={{ backgroundImage: `url(${bgPic})` }}>
//       {!loggedIn ? (
//         <div className="login-container">
//           <h1>Welcome to the Cosmic Attendance System</h1>
//           <input
//             type="text"
//             placeholder="Name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Registration Number"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//             required
//           />
//           <select
//             value={degree}
//             onChange={(e) => setDegree(e.target.value)}
//             required
//           >
//             <option value="">Select Degree</option>
//             <option value="B.Tech">B.Tech</option>
//             <option value="M.Tech">M.Tech</option>
//             <option value="MS">MS</option>
//           </select>
//           <select
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             required
//           >
//             <option value="">Select Branch</option>
//             <option value="CSE">CSE</option>
//             <option value="Mechanical">Mechanical</option>
//             <option value="Chemical">Chemical</option>
//             <option value="IT">IT</option>
//             <option value="Civil">Civil</option>
//           </select>
//           <select
//             value={campus}
//             onChange={(e) => setCampus(e.target.value)}
//             required
//           >
//             <option value="">Select Campus</option>
//             <option value="KTR">KTR</option>
//             <option value="VDP">VDP</option>
//             <option value="RMP">RMP</option>
//             <option value="Modi">Modi</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             required
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       ) : (
//         <div className="attendance-container">
//           <h1>Hello, {userName}!</h1>
//           <p>Registration Number: {registrationNumber}</p>
//           <p>Degree: {degree}</p>
//           <p>Branch: {branch}</p>
//           <p>Campus: {campus}</p>
//           <p>Mobile Number: {mobileNumber}</p>
//           {!attendanceMarked ? (
//             <button onClick={handleMarkAttendance}>Mark Present</button>
//           ) : (
//             <p>Attendance marked! Thanks for being punctual.</p>
//           )}
//         </div>
//       )}
//       {showCongrats && <img src={congratsGif} alt="Congrats" className="congrats-gif" />}
//       {showPopup && (
//         <div className="popup">
//           <p>You have been marked present!</p>
//           <button onClick={handlePopupOk}>OK</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


























// import React, { useState } from 'react';
// import './App.css';
// import congratsGif from './giphy.gif';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [campus, setCampus] = useState('');
//   const [stream, setStream] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [attendanceMarked, setAttendanceMarked] = useState(false);
//   const [showCongrats, setShowCongrats] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleLogin = () => {
//     // Implement your authentication logic here
//     // For simplicity, let's assume successful login
//     setLoggedIn(true);
//   };

//   const handleMarkAttendance = () => {
//     // Implement attendance marking logic
//     setShowCongrats(true);
//     setTimeout(() => {
//       setShowCongrats(false);
//       setShowPopup(true);
//     }, 3000);
//   };

//   const handlePopupOk = () => {
//     setShowPopup(false);
//     // Redirect to login page or perform other actions
//   };

//   return (
//     <div className="App">
//       {!loggedIn ? (
//         <div className="login-container">
//           <h1>Welcome to the Cosmic Attendance System</h1>
//           <input
//             type="text"
//             placeholder="Name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Registration Number"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Campus"
//             value={campus}
//             onChange={(e) => setCampus(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Stream"
//             value={stream}
//             onChange={(e) => setStream(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             required
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       ) : (
//         <div className="attendance-container">
//           <h1>Hello, {userName}!</h1>
//           <p>Registration Number: {registrationNumber}</p>
//           <p>Campus: {campus}</p>
//           <p>Stream: {stream}</p>
//           <p>Mobile Number: {mobileNumber}</p>
//           {!attendanceMarked ? (
//             <button onClick={handleMarkAttendance}>Mark Present</button>
//           ) : (
//             <p>Attendance marked! Thanks for being punctual.</p>
//           )}
//         </div>
//       )}
//       {showCongrats && <img src={congratsGif} alt="Congrats" className="congrats-gif" />}
//       {showPopup && (
//         <div className="popup">
//           <p>You have been marked present!</p>
//           <button onClick={handlePopupOk}>OK</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;













// // import React, { useState } from 'react';
// // import './App.css';

// // function App() {
// //   const [loggedIn, setLoggedIn] = useState(false);
// //   const [userName, setUserName] = useState('');
// //   const [registrationNumber, setRegistrationNumber] = useState('');
// //   const [attendanceMarked, setAttendanceMarked] = useState(false);

// //   const handleLogin = () => {
// //     // You can implement your authentication logic here
// //     // For simplicity, let's assume successful login
// //     setLoggedIn(true);
// //   };

// //   const handleMarkAttendance = () => {
// //     // Implement attendance marking logic
// //     setAttendanceMarked(true);
// //   };

// //   return (
// //     <div className="App">
// //       {!loggedIn ? (
// //         <div className="login-container">
// //           <h1>Welcome to the Attendance System</h1>
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={userName}
// //             onChange={(e) => setUserName(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Registration Number"
// //             value={registrationNumber}
// //             onChange={(e) => setRegistrationNumber(e.target.value)}
// //           />
// //           <button onClick={handleLogin}>Login</button>
// //         </div>
// //       ) : (
// //         <div className="attendance-container">
// //           <h1>Hello, {userName}!</h1>
// //           <p>Registration Number: {registrationNumber}</p>
// //           {!attendanceMarked ? (
// //             <button onClick={handleMarkAttendance}>Mark Present</button>
// //           ) : (
// //             <p>Attendance marked! Thanks for being punctual.</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;



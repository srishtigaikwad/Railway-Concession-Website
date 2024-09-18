const firebaseConfig = {
    apiKey: "AIzaSyDPI7GO5-3H1jWK1QA6vMLdNT3RTYML3dc",
    authDomain: "quantam-bytes.firebaseapp.com",
    databaseURL: "https://quantam-bytes-default-rtdb.firebaseio.com",
    projectId: "quantam-bytes",
    storageBucket: "quantam-bytes.appspot.com",
    messagingSenderId: "585268620067",
    appId: "1:585268620067:web:e38ac87fd084c37b447a96"
  };


  firebaseConfig.initializeApp(firebaseConfig);


  const quantumbytesDB =  firebaseConfig.database().ref('Quantum Bytes')
  document.getElementById('contactForm').addEventListener('submit', submitform)

  function submitForm(e){
   e.preventDefault();

 var Name= getElementVal("Name");
 var RollNo= getElementVal("Roll No");
 var DOB= getElementVal("Date of Birth");
 var Address= getElementVal("Address");
 var Branch= getElementVal("Select Your Branch");
 var Year= getElementVal("Select your Academic Year");
 var MobileNo= getElementVal("Mobile No");
 var Password= getElementVal("Password");
 saveMessages(Name, RollNo, DOB,Address,Branch,Year,MobileNo,Password);
}

const saveMessages = (Name, RollNo, DOB,Address,Branch,Year,MobileNo,Password) => { var newContactForm = contactFormDB.push()};

newContactForm.set({ 
    name: name,
    emailid: emailid,
     Name:Name,
   RollNo:RollNo,
     DOB:DOB,
   Address:Address,
     Branch:Branch,
    Year:Year,
     MobileNo:MobileNo,
    Password:Password});

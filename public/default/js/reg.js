// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9CtmOnvTgzesdH3YBzquIuHrARtfeU_M",
    authDomain: "mssn-49bdd.firebaseapp.com",
    databaseURL: "https://mssn-49bdd.firebaseio.com",
    projectId: "mssn-49bdd",
    storageBucket: "mssn-49bdd.appspot.com",
    messagingSenderId: "476170176254",
    appId: "1:476170176254:web:5e346b7fc10a62c07e87af",
    measurementId: "G-H7BEX31T8D"
  };
  
  firebase.initializeApp(config);
  
    
    // Reference messages collection
    var messagesRef = firebase.database().ref('RegisteredUsers');
    
    // Listen for form submit
    document.getElementById('createForm').addEventListener('submit', submitForm);
    
    // Submit form
    function submitForm(e){
      e.preventDefault();
    
      // Get values
      const firstname = getInputVal('firstname');
      const middlename = getInputVal('middlename');
      const lastname = getInputVal('lastname');
      const date = getInputVal('date');
      const sex = getInputVal('sex');
      const state = getInputVal('state');
      const bio = getInputVal('bio');
      const department = getInputVal('department');
      const faculty = getInputVal('faculty');
      const level = getInputVal('level');
      const email = getInputVal('email');
      const phone = getInputVal('phone');
    
      // Save message
      saveMessage(firstname, middlename, lastname, date, sex, state, bio, level, department, faculty, phone, email);
  
    //    // Show alert
    // document.querySelector('.alert').style.display = 'block';
  
    // // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // },20000);
  
      // Clear form
    document.getElementById('createForm').reset();
    }
    // Function to get get form values
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage(firstname, middlename, lastname, date, sex, state, bio, level, department, faculty, phone, email){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        firstname:firstname,
        middlename:middlename,
        lastname:lastname,
        date:date,
        sex:sex,
        state:state,
        bio:bio,
        level:level,
        department:department,
        faculty:faculty,
        phone:phone,
        email:email
      });
    }
// Initialize Firebase
  var config = {
    ////
  };
  firebase.initializeApp(config);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('registerForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    const name = getInputVal('name');
    const department = getInputVal('department');
    const faculty = getInputVal('faculty');
    const year = getInputVal('year');
    const phone = getInputVal('phone');
    const email = getInputVal('email');
    const whatsno = getInputVal('whatsno');
  
    // Save message
    saveMessage(name, department, faculty, year, phone, email, whatsno);

     // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },20000);

    // Clear form
  document.getElementById('registerForm').reset();
  }
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, department, faculty, year, phone, email, whatsno){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      department:department,
      faculty:faculty,
      year:year,
      phone:phone,
      email:email,
      whatsno:whatsno
    });
  }
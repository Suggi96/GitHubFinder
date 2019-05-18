//Search input
const searchUser = document.getElementById('searchUser');

//Init a Github
const github =  new Github;

//Init UI
const ui = new UI;

//Seach input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get Input Text
  const userText = e.target.value;
  if(userText !== '') {
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        //Clear Alert
        ui.clearAlert();
        //Show Alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      }
      else {
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }
  //clear profle
  else {
    ui.clearProfile();
  }
});
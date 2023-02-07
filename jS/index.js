const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})
//close sidebar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})
// change theme
themeToggler.addEventListener("click", () =>{
     document.documentElement.classList.toggle('dark-theme-varaibles');

    // document.documentElement.setAttribute('data-theme', 'dark')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})





//marcel test
function togglepopup(){
    document.getElementById('popup').classList.toggle('active')
}
class project {
    constructor(projectName, projectNumber, projectDuration, projectStatus, projectDetails){
      
        this.projectName=projectName;
        this.projectNumber=projectNumber; 
        this.projectDuration=projectDuration;
        this.projectStatus=projectStatus;
        this.projectDetails=projectDetails;
        this.id= Date.now();


    }
 }

 const storedProjects = [

{
    projectName : 'my projects1',
    projectNumber: 'my project number',
    projectDuration:'1 month',
    projectStatus: 'my project status',

},
{
    projectName : 'my projects2',
    projectNumber: 'my project number',
    projectDuration:'1 month',
    projectStatus: 'my project status',

},
{
    projectName : 'my projects3',
    projectNumber: 'my project number',
    projectDuration:'1 month',
    projectStatus: 'my project status',

},
{
    projectName : 'my projects00',
    projectNumber: 'my project number',
    projectDuration:'1 month',
    projectStatus: 'my project status',

},
{
    projectName : 'my projects4',
    projectNumber: 'my project number',
    projectDuration:'1 month',
    projectStatus: 'my project status',

}


 ]



 class UI {

    static displayStudent(){
        const projects = storedProjects;
        projects.forEach((project)=>UI.addStudentToList(project));
    }
    

    static addStudentToList(project){
        const card = document.querySelector('#myBodyId');
        const newProject = document.createElement('tr');
        newProject.innerHTML = `
        <td>${project.projectName}</td>
        <td>${project.projectNumber}</td>
        <td>${project.projectDuration}</td>
        <td class="warning">${project.projectStatus}</td>
        <td class="primary"><button class="mybtn2 delete">Delete</button></td>`;
        card.appendChild(newProject);
      
    }
    static deleteStudent(el) {
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();

        }
    }
 }
 
 //display students
 document.addEventListener('DOMContentLoaded', UI.displayStudent);


const marcelbtn =  document.querySelector('.mybtn');
marcelbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const projectName= document.getElementById('projectName').value;
    const projectNumber= document.getElementById('projectNumber').value;
    const projectDuration= document.getElementById('projectDuration').value;
    const projectStatus=document.getElementById('projectStatus').value;
    if(projectName === '' || projectNumber === '' || projectDuration === ''){
        alert('enter all feilds')
       

    }else{
        const newProject = new project(projectName, projectNumber, projectDuration, projectStatus);
        UI.addStudentToList(newProject);
        document.forms[0].reset();
        projects.push(newProject);
        document.getElementById('popup').classList.toggle('active')
        console.log(project);
      
    }
   
} )


document.querySelector('#myBodyId').addEventListener('click', (e)=>{
    UI.deleteStudent(e.target);
    store.deleteStudent(e.target.parentElement.previousElementSibling.textContent);
 });

 
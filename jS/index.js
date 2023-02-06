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
    document.body.classList.toggle('dark-theme-varaibles');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
projects.forEach(project => {
    const tr =document.createElement('tr');

   const prjtStaClass = project.projectStatus === 'new' ? 'danger' : project.projectStatus === 'pending' ? 'warning' : 'primary';
    console.log(prjtStaClass);
    // const trContent = `
    //                     <td>'$(project.projectName)'</td>'
    //                     <td>$(project.projectNumber)</td>
    //                     <td>$(project.projectDuration)</td>
    //                     <td class="$(project.projectStatus === 'new' ?
    //                      'danger' : project.projectStatus === 'pending' ? 'warning'
    //                       : 'primary')"></td>
    //                     <td class="primary">Details</td>
    //                     `;
    const trContent = "<td>" + project.projectName + "</td>"
                    + "<td>" + project.projectNumber + "</td>"
                     + "<td>" + project.projectDuration + "</td>"
                     + "<td>" + project.projectStatus + "</td>"
                     + "<td>" + project.projectDuration + "</td>"

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
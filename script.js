function gButton(){
 let fgButton = document.querySelector(".fgButton")
 let formContainer = document.querySelector(".formContainer")
 let sect = document.querySelector(".sect")
 let backButton = document.querySelector(".backButton")
 fgButton.addEventListener("click",()=>{
        formContainer.style.display = "block"
        sect.style.display = "none"

 })
 backButton.addEventListener("click",()=>{
        formContainer.style.display = "none"
        sect.style.display = "block"

 })

// image chnager
let img = ["IMG/ChatGPT Image Aug 11, 2026, 02_52_33 PM.png","IMG/ChatGPT Image Aug 11, 2026, 02_08_38 PM.png"]
let frontImg1 = document.getElementById("frontImg1")
let index = 0;
setInterval(()=>{
        index++;
        if(index >= img.length){
                index = 0;
        }
        frontImg1.src = img[index];

},2000);

}gButton()


// resume form
function generatePDF(){
    let name = document.querySelector(".name")
    let fatherName = document.querySelector(".father")
    let motherName = document.querySelector(".mother")
    let martialStatus = document.querySelector(".martial")
    let addr = document.querySelector(".address")
    let state = document.querySelector(".state")
    let district = document.querySelector(".district")
    let city = document.querySelector(".city")
    let email = document.querySelector(".email")
    let phone = document.querySelector(".phone")
    let language = document.querySelector(".language")
    let hSchool = document.querySelector(".hSchool")
    let inter = document.querySelector(".inter")
    let graduation = document.querySelector(".graduation")
    let Tqualification = document.querySelector(".Tqualification")
    let experiance = document.querySelector(".experiance")
    let religion = document.querySelector(".religion")
    let nationality = document.querySelector(".nationality")
    let skill = document.querySelector(".skill")
    let dob = document.querySelector(".dob")
    let gender = document.querySelector(".gender")
    let checkBox = document.getElementById("checkBox")

       
// button  
    let buttun = document.querySelector(".gButton")
buttun.addEventListener("click",()=>{
        const {jsPDF} = window.jspdf;
            const doc = new jsPDF();
//        
// function
      if(checkBox.checked && name.value !="" && fatherName.value !="" && motherName.avlue !="" && martialStatus.value !="" && addr.value !="" && state.value !="" && district.value !="" && city.value !="" && email.avlue !="" && phone.value !="" && hSchool.value !="" && inter.value !="" && language.value !="" && graduation.value !="" && Tqualification.value !="" && experiance.value !="" && religion.value !="" && nationality.value !="" && skill.value !="" && dob.value !="" && gender.value != ""){
        function resume(){
        let pageWidth = doc.internal.pageSize.getWidth();
        doc.setFontSize(30)
        doc.setFont("bold")
        doc.text("Resume",pageWidth/2.3,20)
        doc.line(90,21,125,21);
        }resume()
        function address(){
        doc.setFontSize(15)
         doc.setFont("Normal Text","bold")
        doc.text(name.value,10,35)

        doc.setFont("Normal Text","normal")
        doc.setFontSize(14)
        doc.text("H. N.",10,42)
        doc.text(addr.value,10,49)
        doc.text(city.value,10,55)
        doc.text(state.value,10,61)
        doc.setFont("Normal Text")
        doc.text("email. "+email.value,10,67)
        doc.text("Phone N. "+phone.value,10,73)
    // career objactive    
        doc.setTextColor(10, 10, 10)
        doc.setFillColor(171, 184, 204);
        doc.rect(8,80,192,10,"F")    
        doc.text("CAREER OBJECTIVE",10,86.5)

        doc.setTextColor("black")
        doc.text("I aim to secure a challenging and growth-oriented position where I can utilize my skills,",10,98)
        doc.text("and dedication to contribute effectively to the success of the organization while enhancing",10,104)
        doc.text("my professional development.",10,109)
// education
        doc.setTextColor(10, 10, 10)
        doc.setFillColor(171, 184, 204);
        doc.rect(8,119,192,10,"F")    
        doc.text("EDUCATION QUALIFICATIONS",10,125.5)
        doc.setTextColor("black")
        doc.text(hSchool.value,10,135)
        doc.text(inter.value,10,143)
        doc.text(graduation.value,10,151)

// technical qualification
        doc.setTextColor(10, 10, 10)
        doc.setFillColor(171, 184, 204);
        doc.rect(8,161,192,10,"F")    
        doc.text("TECHNICAL QUALIFICATIONS",10,167.5)
        doc.setTextColor("black")
        doc.text(Tqualification.value,10,177)

// WORKING EXPERIANCE
        doc.setTextColor(10, 10, 10)
        doc.setFillColor(171, 184, 204);
        doc.rect(8,187,192,10,"F")    
        doc.text("WORKING EXPERIENCE",10,193.5)
        doc.setTextColor("black")
        doc.text(experiance.value,10,203)
        
// PESONAL DETAILS
        doc.setTextColor(10, 10, 10)
        doc.setFillColor(171, 184, 204);
        doc.rect(8,213,192,10,"F")    
        doc.text("PERSONAL DETAILS",10,219.5)
        doc.setTextColor("black")
        doc.setFontSize(13)

        doc.text("father's name",10,229)
        doc.text(":      "+fatherName.value,50,229)

        doc.text("mother's name  ",10,235)
        doc.text(":      "+motherName.value,50,235)

        doc.text("dob  ",10,241)
        doc.text(":      "+dob.value,50,241)

        doc.text("gender  ",10,247)
        doc.text(":      "+gender.value,50,247)

        doc.text("nationality  ",10,253)
        doc.text(":      "+nationality.value,50,253)

        doc.text("martial status  ",10,259)
        doc.text(":      "+martialStatus.value,50,259)

        doc.text("religion  ",10,265)
        doc.text(":      "+religion.value,50,265)

        doc.text("language  ",10,271)
        doc.text(":      "+language.value,50,271)

        doc.text("skill  ",10,277)
        doc.text(":      "+skill.value,50,277)
// CONCULUSION
        doc.setFont("Normal Text","bold")
        doc.text("DECLARATION -",10,287)
        doc.setFont("Normal Text","normal")
        doc.text("I hereby declare that every information provided is true and correct",50,287)
        doc.text("to the best of my knowledge, and i take full responsibility for its authenticity.",10,293)        

        }address()
        window.open(doc.output("bloburl"), "_blank");
     }    
     else{
        alert("fill full details")
     }
})
    
    
}generatePDF()

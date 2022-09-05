import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data: any =
    [
      {
        "parentName": "Are Assignment Writing Services Legal?",
        "childProperties":
          [
            { "propertyName": "Companies offering student assignment help and writing services are legitimate, legal and safe for use. We are rendering our services and working with students for a long time. You, as a student, are supposed to use your discretion to use the deliverables you purchase. We follow the laws prevalent in the UK and are aware of issues of academic misconduct. However, seeking help from experts for academic help is not illegal. In fact, it is considered a norm. If you are still confused, we can further discuss the legitimacy over a call or email." },
            
          ]
      },
      {
        "parentName": "How Can A Student Decide Whether This Assignment Writing Company Is Right Or Wrong?",
        "childProperties":
          [
            { "propertyName": "Firstly, the students must look over all of the service features provided by the company to ensure that the company is authentic or not. For example, examine the experts' writing quality, delivery policies, writer qualifications, and student feedback, among other things. Our company is 100 per cent legitimate in this aspect, which is why students have been using our services for over a decade." },
           
          ]
      },
      {
        "parentName": "What Makes Our Services Better Than Other Academic Writing Agencies?",
        "childProperties":
          [
            { "propertyName": " we have a team of academic professionals, Ph.D. holding experts and subject experts. We customise the assignment based on your specific requirements. We render our services round the clock, which is crucial to upgrade the academic solutions based on your needs. The academic help providers are highly qualified to provide professional solutions to all your assignment writing woes. We also strive to provide you with academic help well within the deadline. Moreover, we are aware of issues of academic misconduct and curate our services to negate the problems. Our customer support team works round the clock to assist with those devoid of grammatical errors." },
           
          ]
      },
      {
        "parentName":"Why Do Students Need Online Guidance For Assignments?",
        "childProperties":[
          {"propertyName":"High grade is exceptionally crucial in this competitive world. Deadlines are constantly creeping, and students are burdened with more work than they are capable of doing. It often takes a toll on your mental health. We are aware of it, and we curate our services to relieve you of the burden. Our subject experts formulate quality solutions suiting your specific requirements. We are here to help you have quality experiences without having to fret about impending deadlines. Our robust team of experts in the field of Mathematics, Economics, Law, Nursing, and Management will provide academic solutions round the clock."}
        ]
      },
      {
        "parentName":"What To Do When You Need Assignment Writing Help?",
        "childProperties":[
          {"propertyName":"Some students need academic assistance, but they are not aware of whom to seek. Assignment writing services are merely an online platform that you can seek to provide online guidance. We are just a single mail or message away. Just give us a call, and we will get back to you. We are constantly working for providing effective customer service. We are reputed, trustworthy and have provided high quality, well-customised help to thousands of students. So if you need any help regarding the assignment, look no further and notify us."}
        ]
      },
      {
        "parentName":"Is this website Legit?",
        "childProperties":[
          {"propertyName":"We are a registered company, which works aligned with UK-based academic laws. With our round-the-clock services, we have been able to underpin a massive trust level from our ex-clients. Our assignment writers are aware of the academic conduct norms and provide quality assignment help, which is legit. We are diligent about delivering quality work within the deadline for the students. When our services are used properly, they are 100% legit and can be utilised for passing courses and earn a degree. So wait no further, and give us a call on our toll-free number."}
        ]
      },
      {
        "parentName":"Where Can I Get Help With My Homework?",
        "childProperties":[
          {"propertyName":"If you are stuck with an unreasonable deadline and still fretting over how to deliver the work within a small time constraint, look no further. We have a band of academic help experts working round the clock to ensure that ultimate solutions for your essay writing woes are provided. We prioritise timed delivery and ensure that you do not miss your deadline. Additionally, we also ensure that you get high scores on your assignment. So, you can easily bank on our expertise and deliver high-quality work. We are your one-stop service providers, constantly providing you with thorough guidance."}
        ]
      },
      {
        "parentName":"Can Academic writing Services Help Me to Do the Assignments Faster?",
        "childProperties":[
          {"propertyName":"Yes, they can. Our services are formulated to meet your unreasonable deadline. Students often are burdened with numerous works and more than one assignment. Thus, they are incapable of delivering quality work in all the assignments help. We advise you to share your burdens with us in return for a payment for our expert services. Our academic helpers are working round the clock to be of primary guidance to you. You can constantly discuss with them your specific requirements. You can suggest your wants and needs, and the assignment writers update their services concerning the same."}
        ]
      },
      {
        "parentName":"Is It Safe To Get Academic Writing Help Online?",
        "childProperties":[
          {"propertyName":"Yes, absolutely! We have been in the academic guidance field for a long time. We have delighted students who have scored highly and received their degrees, thanks to our dedicated team of experts that write and deliver every assignment adhering to legal guidelines. We follow the safety guidelines that are prevalent for assignment assistance in UK. But, as a legit company, we urge you to be aware of the scammers who have mushroomed. So do your research about the legitimacy of the company before placing an order. That being said, the academic assistance provided by us is entirely legal, legitimate and safe."}
        ]
      },
      {
        "parentName":"Can Turnitin Detect The Assignments Written By Online Help Providers?",
        "childProperties":[
          {"propertyName":"Well, no! Turnitin is software that is utilised for detecting unoriginal content. As long as the assignment is developed originally, customised as per the requirement of the assignment's specific needs, Turnitin is incapable of catching it. Our team of assignment experts are highly experienced in providing plagiarism-free. The assignment writing service is original, and we steer away from paraphrasing already submitted assignments. We have zero-tolerance towards plagiarism, which makes our services unique. You can thus use our services for securing high marks in specific subjects."}
        ]
      }
    ]

  uniLogo = [
    {img:'../../../assets/uni/bristol.jpg'},
    {img:'../../../assets/uni/cambridge.jpg'},
    {img:'../../../assets/uni/durham.jpg'},
    {img:'../../../assets/uni/edenberg.jpg'},
    {img:'../../../assets/uni/greenwich.jpg'},
    {img:'../../../assets/uni/liverpool.jpg'},
    {img:'../../../assets/uni/oxford.jpg'},
    {img:'../../../assets/uni/sheffield.jpg'},
    {img:'../../../assets/uni/stirling.jpg'},
  ]
  ngOnInit(): void {
  }
  toggleAccordian(event, index) {
    var element = event.target;
    element.classList.toggle("active");
    if(this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
}

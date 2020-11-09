import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizInfo:Quiz[];
  flag:boolean =false;
  j:number = 0;
  counter:number = 0;


  flag1:boolean = false;
  flag2:boolean = false;
  flag3:boolean = false;
  flag4:boolean = false;
  flag5:boolean = false; 
  flag6:boolean = false;
  flag7:boolean = false;
  flag8:boolean = false;
  flag9:boolean = false;
  flag10:boolean = false; 

 
  msg1:String;
  msg2:String;
  msg3:String;
  msg4:String;
  msg5:String;
  msg6:String;
  msg7:String;
  msg8:String;
  msg9:String;
  msg10:String;



  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
   
  }

  loadQuiz() :void {
    this.flag=true;
    this.counter = 0;
    this.quizService.loadQuizDetails().subscribe(data=>this.quizInfo=data);
  }

 
  onSubmit(userObj, buttonType, i): void {
   
    if(i=== undefined){
      i=0;
    }
    
    this.j = this.quizInfo[i].answerIndex;
  
    if(buttonType==="Save") {
      console.log(this.counter);
       
      switch(i){
        case 0:
          this.flag1=true;
         
          if(this.quizInfo[i].options[this.j].name===userObj.q){
            console.log("Correct Answer");
            this.msg1 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
            this.counter++;
          }
          else{
            console.log("Wrong Answer")
            this.msg1 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
          }
          break;

          case 1:
          this.flag2=true;
          
          if(this.quizInfo[i].options[this.j].name===userObj.q){
            console.log("Correct Answer");
            this.msg2 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
            this.counter++;
          }
          else{
            console.log("Wrong Answer")
            this.msg2 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
          }
          break;

          case 2:
          this.flag3=true;
          
          if(this.quizInfo[i].options[this.j].name===userObj.q){
            console.log("Correct Answer");
            this.msg3 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
            this.counter++;
          }
          else{
            console.log("Wrong Answer")
            this.msg3 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
          }
          break;

          case 3:
          this.flag4=true;
          
          if(this.quizInfo[i].options[this.j].name===userObj.q){
            console.log("Correct Answer");
            this.msg4 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
            this.counter++;
          }
          else{
            console.log("Wrong Answer")
            this.msg4 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
          }
          break;

          case 4:
          this.flag5=true;
          
          if(this.quizInfo[i].options[this.j].name===userObj.q){
            console.log("Correct Answer");
            this.msg5 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
            this.counter++;
          }
          else{
            console.log("Wrong Answer")
            this.msg5 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
          }
          break;

          case 5:
            this.flag6=true;
          
            if(this.quizInfo[i].options[this.j].name===userObj.q){
              console.log("Correct Answer");
              this.msg6 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
              this.counter++;
            }
            else{
              console.log("Wrong Answer")
              this.msg6 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
            }
            break;

            case 6:
              this.flag7=true;
              
              if(this.quizInfo[i].options[this.j].name===userObj.q){
                console.log("Correct Answer");
                this.msg7 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
                this.counter++;
              }
              else{
                console.log("Wrong Answer")
                this.msg7 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
              }
              break;

              case 7:
                this.flag8=true;
                
                if(this.quizInfo[i].options[this.j].name===userObj.q){
                  console.log("Correct Answer");
                  this.msg8 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
                  this.counter++;
                }
                else{
                  console.log("Wrong Answer")
                  this.msg8 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
                }
                break;

                case 8:
                  this.flag9=true;
      
                  if(this.quizInfo[i].options[this.j].name===userObj.q){
                    console.log("Correct Answer");
                    this.msg9 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
                    this.counter++;
                  }
                  else{
                    console.log("Wrong Answer")
                    this.msg9 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
                  }
                  break;

                  case 9:
                    this.flag10=true;
                    
                    if(this.quizInfo[i].options[this.j].name===userObj.q){
                      console.log("Correct Answer");
                      this.msg10 = "You choose the right answer." + this.quizInfo[i].options[this.j].name;
                      this.counter++;
                    }
                    else{
                      console.log("Wrong Answer")
                      this.msg10 = "You chose the wrong answer. The correct answer is " + this.quizInfo[i].options[this.j].name;
                    }
                    break;
      }
        
   
        

    }
    if(buttonType==="Submit"){
        console.log(buttonType);
        console.log(userObj);
       
      //  alert("Total Questions = 10  You Scored : " + this.counter );
    }

}

}

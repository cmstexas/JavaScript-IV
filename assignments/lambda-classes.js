// CODE here for your Lambda Classes


//PERSON CLASS//

class Person {
    constructor(pattributes){
    this.name = pattributes.name;
    this.age = pattributes.age;
    this.location = pattributes.location;
}
speak() {
  return `Hello my name is ${this.name} and I am from ${this.location}`;
}
}

//INSTRUCTOR CLASS//

class Instructor extends Person {
    constructor(instattributes){
        super(instattributes);
    this.specialty = instattributes.specialty;
    this.favLanguage = instattributes.favLanguage;
    this.catchPhrase = instattributes.catchPhrase;
}

demo(subject) {
  return `Today we are learning about ${subject}`;
}

grade(student, subject) {
    return(`${student.name} receives a perfect score on ${subject}`);
  }
}


//STUDENT CLASS//

class Student extends Person {
    constructor(studattributes){
        super(studattributes);
    this.previousBackground = studattributes.previousBackground;
    this.className = studattributes.className;
    this.favSubjects = studattributes.favSubjects;
}

listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));}

PRAssignment(subject) {
    return(`${this.name} has submitted a PR for ${subject}`);
  }

sprintChallenge(subject) {
    return(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

//ProjectManager CLASS//

class ProjectManager extends Instructor {
    constructor(pmattributes){
        super(pmattributes);
    this.gradClassName = pmattributes.gradClassName;
    this.favInstructor = pmattributes.favInstructor;
}
standUp(channel) {
  return(`${this.name} announces to ${channel}, @channel standy times!`);
}

debugsCode(student, subject) {
    return(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }

}


  //TESTING//

  const Michael = new Instructor({
    name: 'Michael',
    location: 'Scranton',
    age: 45,
    favLanguage: 'Bossy',
    specialty: 'Diversity Training',
    catchPhrase: `Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.`
  });

  
const Pam = new Student({
    name: 'Pam',
    location: 'New York',
    age: 31,
    previousBackground: 'Art',
    className: 'Intro to HTML',
    favSubjects: ["coding", "art", "design"]
  });

  const Jim = new ProjectManager({
    name: 'Jim',
    location: 'Boston',
    age: 35,
    gradClassName: 'CS50',
    favInstructor: 'Dwight',
  });

  console.log(Michael.speak());
  console.log(Pam.speak());
  console.log(Jim.speak());
  console.log(Michael.catchPhrase);
  console.log(Michael.demo("Javascript"));
  console.log(Michael.grade(Pam,"HTML"));
  console.log(Pam.listsSubjects(Pam.favSubjects))
    console.log(Pam.PRAssignment("Web Design"));
  console.log(Pam.sprintChallenge("Arrays"));
  console.log(Jim.standUp("Jim's PM Slack Channel"));
  console.log(Jim.debugsCode(Pam, "React"));
  
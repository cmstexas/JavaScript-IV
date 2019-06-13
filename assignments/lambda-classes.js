// CODE here for your Lambda Classes


//PERSON CLASS//

class Person {
    constructor(pattributes){
    this.name = pattributes.name;
    this.age = pattributes.age;
    this.location = pattributes.location;
}
speak() {
  return(`Hello my ${this.name} is Fred, I am from ${this.location}`);
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
  return(`Today we are learning about {subject}`);
}

grade(subject) {
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
  return(this.favSubjects);
}

PRAssignment(subject) {
    return(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge() {
    return(`${student.name} has begun sprint challenge on ${subject}`);
  }
}


//ProjectManager CLASS//

class ProjectManagers extends Instructor {
    constructor(pmattributes){
        super(pmattributes);
    this.gradClassName = pmattributes.gradClassName;
    this.favInstructor = pmattributes.favInstructor;
}
standUp(channel) {
  return(`${name} announces to ${channel}, @channel standy times!`);
}

debugsCode(subject) {
    return(`${name} debugs ${student.name}'s code on ${subject}`);
  }

}


function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if(initialAge > 0) {
    this.age = initialAge;
    } else {
        console.log("Age is not valid, setting age to 0.");
        this.age = 0;
        }

    this.amIOld = function() {
    (this.age < 13)
        ? console.log("You are young.")
        : (this.age >= 13 && this.age < 18)
        ? console.log("You are a teenager.")
        : console.log("You are old.");
    };
   this.yearPasses=function(){
          // Increment the age of the person in here
          return this.age +=1;
   };
}


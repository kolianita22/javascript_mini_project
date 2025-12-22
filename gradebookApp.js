function getAverage(arr)
{ 
   let sum=0;
   for(let num of arr)
   {
        sum+=num;
        
        
   }
   return sum/arr.length

}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))

function getGrade(score)
{
    if(score==100)
    {
      return "A+";
    }
    else if(score>=90 && score<=99)
    {
      return "A";
    }
    else if(score>=80 && score<=89)
    {
      return "B";
    }
    else if(score>=70 && score<=79)
    {
      return "C";
    }
    else if(score>=60 && score<=69)
    {
       return "D";
    }
    else
    {
      return "F";
    }
}
console.log(getGrade(100))

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

// 4. Function to build student message
function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

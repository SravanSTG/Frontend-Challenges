// Default on load
// Make the first one bold and collapse all other
$("#q1").addClass("bold");
$("#arrow1").addClass("rotate");
for (let i = 2; i <= 5; i++)
{
  $(".answer" + i).slideUp();
}

// On Click
$(".arrow-down").click(function()
  {
    let arrowClass = this.id;
    let arrowNumber = arrowClass.slice(arrowClass.length - 1);
    removeQuestionBold();
    questionBold(arrowNumber);
    collapseAnswers(arrowNumber);
    toggleCollapse(arrowNumber);
  } );

$(".question").click(function()
  {
    let questionId = this.id;
    let arrowNumber = questionId.slice(questionId.length - 1);
    removeQuestionBold();
    questionBold(arrowNumber);
    collapseAnswers(arrowNumber);
    toggleCollapse(arrowNumber);
  } );

// Collapse all except the one clicked
function collapseAnswers(ansNum)
{
  for (let i = 1; i <= 5; i++)
  {
    if (i !== ansNum)
    {
      $(".answer" + i).slideUp();
      $("#arrow" + i).removeClass("rotate");
    }
  }
}

// Slide up and down on click
function toggleCollapse(ansNum)
{
  $(".answer" + ansNum).slideToggle();
  $("#arrow" + ansNum).addClass("rotate");
}

// Make question bold on click
function questionBold(quesNum)
{
  $("#q" + quesNum).addClass("bold");
}

// Remove bold on all questions
function removeQuestionBold()
{
  for (let i = 1; i <= 5; i++)
  {
    $("#q" + i).removeClass("bold");
  }
}

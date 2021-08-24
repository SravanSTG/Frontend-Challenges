let shareContainer = document.querySelector(".share-container");

document.querySelector(".share-circle").onclick = function()
{
  if (shareContainer.style.display == "none")
  {
    shareContainer.style.display = "block";
    document.querySelector(".share-circle").style.backgroundColor = "hsl(214, 17%, 51%)";
    document.querySelector(".share-arrow").classList.add("arrow-change");
  }
  else
  {
    shareContainer.style.display = "none";
    document.querySelector(".share-circle").style.backgroundColor = "hsl(210, 46%, 95%)";
    document.querySelector(".share-arrow").classList.remove("arrow-change");
  }
};

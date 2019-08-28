$(function() {
  let todoArray = [
    { done: true, task: "start the exercise" },
    { done: true, task: "take a cofee" },
    { done: false, task: "finish the exercise" },
    { done: false, task: "do the bonus" }
  ];
  for (const todo of todoArray) {
    const myLI = $("<li>");
    //checkbox
    const myCHECK = $("<input type='checkbox'>");
    myLI.append(myCHECK);
    myCHECK.attr("checked", todo.done);
    $("#list").append(myLI);
    if (todo.done) {
      myLI.css("text-decoration", "line-through");
    }
    myCHECK.on("click", function() {
      //unchecked the box
      if (todo.done) {
        todo.done = false;
        myLI.css("text-decoration", "");
      } else {
        //checked the box
        todo.done = true;
        myLI.css("text-decoration", "line-through");
      }
    });
    //span
    const mySPAN = $("<span>");
    mySPAN.text(todo.task);
    myLI.append(mySPAN);
  }

  $("form").on("submit", function(event) {
    event.preventDefault();
    const todoTask = $("#nextTask").val();
    $("#nextTask").val("");
    const myLI = $("<li>");
    //checkbox
    const myCHECK = $("<input type='checkbox'>");
    myLI.append(myCHECK);
    $("#list").append(myLI);

    myCHECK.on("click", function() {
      //unchecked the box
      //myLI.style.textDecoration = myCHECK.checked ? "line-through" : "";
      console.log(myCHECK.is(":checked"));
      const tdvalue = myCHECK.is(":checked") ? "line-through" : "";
      myLI.css("text-decoration", tdvalue);
    });
    //span
    const mySPAN = $("<span>");
    mySPAN.text(todoTask);
    myLI.append(mySPAN);
  });
}); //END DO NOT DELETE

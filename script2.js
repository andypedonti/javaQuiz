$(".textarea").each(function () {
  let key = $(this).attr("id");
  let inputValue = localStorage.getItem(key);
  $(this).val(inputValue);
});
$(".saveBtn").on("click", function () {
  let inputValue = $(this).parent().parent().find("input").val();
  let key = $(this).parent().parent().find("input").attr("id");

  localStorage.setItem(key, inputValue);
});
let localStorageMock = {
  firstName: "andy",
  lastName: "pedonti",
};

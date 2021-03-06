function BankAccount(name, alias, type, initial) {
  this.name = name;
  this.alias = alias;
  this.type = type;
  this.initial = initial;
}

// BankAccount.prototype.withdrawl = function() {
//   this.initial = this.initial - inputtedWithDrawl;
// }
// BankAccount.prototype.deposit = function() {
//   this.initial = this.initial + inputtedDeposit;
// }

BankAccount.prototype.balance = function() {
  this.initial = this.initial + inputtedDeposit - inputtedWithDrawl;
}

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputtedFullName = $("input#new-name").val();
    var inputtedAccountAlias = $("input#new-account-alias").val();
    var inputtedAccountType = $("input#new-account-type").val();
    var inputtedInitialDeposit = $("input#new-initial-deposit").val();

    var newAccount = new BankAccount (inputtedFullName, inputtedAccountAlias, inputtedAccountType, inputtedInitialDeposit);

    // $("ul#accounts").append("<li><span class='account'>" + newAccount.alias + " (" + newAccount.type + ")" + "</span></li>");

    // $(".account").last().click(function() {
    $("#show-account").show();
    $(".account-alias").text(newAccount.alias);
    $(".full-name").text(newAccount.name);
    $(".account-type").text(newAccount.type);
    $(".account-balance").text(newAccount.initial);
    // });
    $(".add-account").hide();

    // $("input#new-name").val("");
    // $("input#new-account-type").val("");
    // $("input#new-initial-deposit").val("");
    // $("input#new-account-alias").val("");


  });
  $("form#transaction").submit(function(event) {
    event.preventDefault();
    var inputtedWithDrawl = $("input#new-withdrawl").val("");
    var inputtedDeposit = $("input#new-deposit").val("");

    $newAccount.balance();

    $("#show-transaction h2").text(newAccount.initial);


    $("input#new-deposit").val("");
    $("input#new-withdrawl").val("");
  });
});

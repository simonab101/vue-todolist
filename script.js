let vue = new Vue({
  el: "#myApp",
  data: {
  tasks: [
  {
    text: "Quarterly Newsletter",
    done: true
  },
  {
    text: "Rectruiting blog post",
    done: true
  },
  {
    text: "Mobile app launch",
    done: true
  },
  {
    text: "Interview with John H.",
    done: false
  },
  {
    text: "Summit update to mobile storefronts",
    done: true
  },
  {
    text: "Schedule meeting with Alex",
    done: false
  },
  {
    text: "Homepage refresh",
    done: true
  },
  {
    text: "Onboard new Sales team members",
    done: true
  },
  {
    text: "Review editorial calendar",
    done: true
  }
  ],
    inputTextValue: ""
  },
  methods: {
    //Aggiunge task alla lista da variabile input
      addTask: function () {
        if (this.inputTextValue != "") {
          this.tasks.push({
          text: this.inputTextValue,
          done: false
        })
      }
    this.inputTextValue = "";
    },
    delTask: function (index) {
    this.tasks.splice(index, 1);
    }
  }
});
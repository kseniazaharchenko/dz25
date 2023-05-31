   // масив, що містить кількість голосів для кожного смайлика
   let voteCounts = [0, 0, 0, 0, 0];

   // додаємо обробник події для кожного смайлика
   let smileys = document.querySelectorAll(".smiley");
   smileys.forEach(function (smiley, index) {
       smiley.addEventListener("click", function () {
           voteCounts[index]++;
           updateVoteCounts();
       });
   });

   // оновлюємо лічильники голосів
   function updateVoteCounts() {
       let voteCountsHtml = "";
       for (let i = 0; i < voteCounts.length; i++) {
           voteCountsHtml += "&#x1F60" + i + " " + voteCounts[i] + " ";
       }
       document.getElementById("vote-counts").innerHTML = voteCountsHtml;
   }
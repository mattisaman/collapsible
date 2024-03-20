<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sample LMS Article</title>
    <style>
        .collapsible {
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            text-align: left;
            outline: none;
            font-size: 15px;
        }

        .active, .collapsible:hover {
            background-color: #555;
        }

        .content {
            padding: 0 18px;
            display: none;
            overflow: hidden;
            background-color: #f1f1f1;
        }
    </style>
</head>
<body>

<h2>Sample LMS Article</h2>

<button type="button" class="collapsible">Section 1: Introduction to E-Learning</button>
<div class="content">
    <p>This section will introduce you to the concept of E-Learning, its benefits, and how it has transformed the educational landscape.</p>
</div>

<button type="button" class="collapsible">Section 2: Understanding LMS</button>
<div class="content">
    <p>Learn what a Learning Management System (LMS) is and how it can be used to facilitate online learning.</p>
</div>

<button type="button" class="collapsible">Section 3: Implementing Effective Courses</button>
<div class="content">
    <p>Tips and strategies for creating effective and engaging courses within an LMS environment.</p>
</div>

<script>
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
</script>

</body>
</html>

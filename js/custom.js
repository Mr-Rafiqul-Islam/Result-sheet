// The Entire fnction is Here

function resultKhujo() {
    var x = parseInt(document.getElementById('Bangla').value);
    var y = parseInt(document.getElementById('English').value);
    var z = parseInt(document.getElementById('Math').value);
    var w = parseInt(document.getElementById('Science').value);

    if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(w)) {
        alert("Please Enter The All Field With Valid Marks");

    }
    else if (x > 100 || x < 0 || y > 100 || y < 0 || z > 100 || z < 0 || w > 100 || w < 0) {
        alert("Enter Valid Marks");
    }
    else {
        var obtain = x + y + z + w;
        document.getElementById('om').innerHTML = obtain;

        var percent = obtain / 400 * 100;
        document.getElementById('per').innerHTML = percent;

        if (x >= 33 && y >= 33 && z >= 33 && w >= 33) {
            var congo = "Congratulations, You Are Passed.! 😊";
            document.getElementById('re').innerHTML = congo;

            var Ban = Grade(x)
            var Eng = Grade(y)
            var MAT = Grade(z)
            var SCI = Grade(w)
            var GPA = calcGpa(Ban, Eng, MAT, SCI);

            document.getElementById('gp').innerHTML = GPA;

            if (GPA == 5) {
                document.getElementById('gr').innerHTML = 'A+';
            }
            else if (GPA < 5 && GPA >= 4) {
                document.getElementById('gr').innerHTML = 'A';
            }
            else if (GPA < 4 && GPA >= 3.5) {
                document.getElementById('gr').innerHTML = 'A-';
            }
            else if (GPA < 3.5 && GPA >= 3) {
                document.getElementById('gr').innerHTML = 'B';
            }
            else if (GPA < 3 && GPA >= 2.5) {
                document.getElementById('gr').innerHTML = 'C';
            }
            else if (GPA < 2.5 && GPA >= 2) {
                document.getElementById('gr').innerHTML = 'D';
            }
            else {
                document.getElementById('gr').innerHTML = 'F';
            }
        } else {
            var fail = "Bad luck, You Are Failed.! 😓";
            document.getElementById('re').innerHTML = fail;
            document.getElementById('gp').innerHTML = '0';
            document.getElementById('gr').innerHTML = 'F';
        }

    };



}

// Calculation GPA 

function Grade(x) {
    var A;

    if (x >= 80 && x <= 100) {
        A = 5
    } else if (x >= 70 && x <= 79) {
        A = 4
    } else if (x >= 60 && x <= 69) {
        A = 3.5
    }
    else if (x >= 50 && x <= 59) {
        A = 3
    }
    else if (x >= 33 && x <= 49) {
        A = 2
    }
    else {
        A = 0
    } return A;

}

// CALCULATION GPA 
function calcGpa(p, q, r, s) {
    var finalGpa = (p + q + r + s) / 4;
    return finalGpa;
}


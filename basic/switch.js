let marks=32;

switch (true) {
    case (marks <=100 && marks>=80):
        console.log('a+');
        break;

    case (marks <=79 && marks>=70):
        console.log('a-');
        break;
    case (marks <=69 && marks>=60):
        console.log('a');
        break;
    case (marks <=59 && marks>=50):
        console.log('b');
        break;
    case (marks <=49 && marks>=40):
        console.log('c');
        break;
    case (marks <=33 && marks>=39):
        console.log('d');
        break;

    default:
        console.log('F')
}
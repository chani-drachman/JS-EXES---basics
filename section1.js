function swap(a, b) {
    a = a + b;
    b = a.slice(0, a.length - b.length);
    a = a.slice(b.length);

    console.log(a, b);
}

swap("hello", "abc"); // abc hello
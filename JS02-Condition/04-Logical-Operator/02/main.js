if (-1 || 0) alert("first"); //work => 01 true

if (-1 && 0) alert("second"); //not work => 0 false

if (null || (-1 && 1)) alert("third"); //work => (-1&&1) => true

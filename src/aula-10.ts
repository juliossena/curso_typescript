// type MarcaTenis = "abc" | "dsaf" | "fdsaf";

enum MarcaTenis2 {
  NIKE = 4,
  DSAF = "dsaf",
  FDSAF = "fdsaf",
}

interface Tenis {
  marcaTenis: MarcaTenis2;
}

const test: Tenis = {
  marcaTenis: MarcaTenis2.NIKE,
};

if (test.marcaTenis === MarcaTenis2.NIKE) {
  console.log("é nike");
}

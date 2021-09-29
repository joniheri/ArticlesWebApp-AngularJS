let dataJson = [
  {
    nama: "Agus Sasmito",
    jabatan: "Direktur Utama",
    Karyawan: [
      {
        nama: "Sutejo Adi",
        jabatan: "Direktur Keuangan",
        Karyawan: [
          {
            nama: "Alvin",
            jabatan: "Akuntan",
            Karyawan: [],
          },
        ],
      },
      {
        nama: "Maman Supeno",
        jabatan: "Direktur Operasional",
        Karyawan: [
          {
            nama: "Bela",
            jabatan: "Programmer",
            Karyawan: [],
          },
        ],
      },
    ],
  },
];

{
  dataJson.map((Data) => (
    <>
      <div>{Data}</div>
    </>
  ));
}

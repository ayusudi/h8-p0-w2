var nama="Harmonie";
var peran="Penyihir";

if(nama==="")
{console.log("Nama harus diisi");
}
else if (peran==="")
{console.log("Selamat datang di Dunia Proxytia,  " + nama +".\n" 
  +"Pilih salah satu peranmu untuk memulai permainan! \n 1. Ksatria \n 2. Tabib \n 3. Penyihir")
}
else if (peran==="Ksatria")
{console.log("Selamat datang di Dunia Proxytia, " + nama +".\n"
  +"Halo Ksatria "+ nama + ", kamu dapat menyerang dengan senjatamu!");
}
else if (peran==="Tabib")
{console.log("Selamat datamg di Dunia Proxytia, "+ nama +".\n"
  + "Halo Tabib "+ nama +", kamu akan membantu temanmu yang terluka.");
}
else if (peran==="Penyihir")
{console.log("Selamat datang di Dunia Proxytia, "+ nama + ".\n"
  +"Hallo Penyihir "+ nama +", ciptakan keajaiban yang membantu kemenanganmu!")
}
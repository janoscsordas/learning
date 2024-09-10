const commonPasswords = [
    "password",
    "123456",
    "12345678",
    "1234",
    "qwerty",
    "12345",
    "dragon",
    "pussy",
    "baseball",
    "football",
    "letmein",
    "monkey",
    "696969",
    "abc123",
    "mustang",
    "michael",
    "shadow",
    "master",
    "jennifer",
    "111111",
    "2000",
    "jordan",
    "superman",
    "harley",
    "1234567",
    "fuckme",
    "hunter",
    "fuckyou",
    "trustno1",
    "ranger",
    "buster",
    "thomas",
    "tigger",
    "robert",
    "soccer",
    "fuck",
    "batman",
    "test",
    "pass",
    "killer",
    "hockey",
    "george",
    "charlie",
    "andrew",
    "michelle",
    "love",
    "sunshine",
    "jessica",
    "asshole",
    "6969",
    "pepper",
    "daniel",
    "access",
    "123456789",
    "654321",
    "joshua",
    "maggie",
    "starwars",
    "silver",
    "william",
    "dallas",
    "yankees",
    "123123",
    "ashley",
    "666666",
    "hello",
    "amanda",
    "orange",
    "biteme",
    "freedom",
    "computer",
    "sexy",
    "thunder",
    "nicole",
    "ginger",
    "heather",
    "hammer",
    "summer",
    "corvette",
    "taylor",
    "fucker",
    "austin",
    "1111",
    "merlin",
    "matthew",
    "121212",
    "golfer",
    "cheese",
    "princess",
    "martin",
    "chelsea",
    "patrick",
    "richard",
    "diamond",
    "yellow",
    "bigdog",
    "secret",
    "asdfgh",
    "sparky",
    "cowboy"
]

function jelszomutat() {
    const mutat = {
        password: {
            type: "text",
            src: "eye1.png"
        },
        text: {
            type: "password",
            src: "eye0.png"
        }
    }

    let jelszoInput = document.getElementById("pass")
    document.getElementById("pass").type = mutat[jelszoInput.type]["type"]
    document.getElementById("szem").src = mutat[jelszoInput.type]["src"]
}


function jelszoerosseg( szo )
    {
	kisbetu = nagybetu = szamjegy = egyeb = 0
	for( i=0; i<szo.length; i++ )
	{
	    c = szo.charCodeAt(i)
	    if( c>=48 && c<=57  )   szamjegy=1 ;  else
	    if( c>=65 && c<=90  )   nagybetu=1 ;  else
	    if( c>=97 && c<=122 )    kisbetu=1 ;  else
	                               egyeb=1 ;
	}
	eredmeny = Math.max(0, Math.min(-4 + szo.length, 4) + kisbetu + nagybetu + szamjegy + egyeb)

    let sorszam = commonPasswords.indexOf(szo)
    if (sorszam > -1) {
        document.getElementById("gyakorisag").innerHTML = `Ez a jelszó a(z) ${sorszam + 1}. leggyakoribb jelszó`
        eredmeny -= 1
    }
	erosseg.innerHTML = skala( eredmeny )
}


function skala( ertek )
    {
	jelzes = ''

    let colors = ["#A00", "#C00", "#FA0", "#FF0", "#8F0", "#0F0", "#0C0", "#0A0"]

    for (let i = 0; i < 8; i++) {
        if (ertek > i) {
            jelzes += `<span style='background-color:${colors[i]};'></span>`
            continue
        }
        jelzes += "<span></span>"
    }

	return jelzes
    }


function egyezes()
    {
	if( document.getElementById('pass').value=='' || document.getElementById('pas2').value=='' )
	{
	    document.getElementById('pipa').src  = 'nonequal.png'
	    document.getElementById('pipa').style.filter   = 'grayscale(1)'
	    document.getElementById('pipa').style.opacity  = .25
        return
	}
	if ( document.getElementById('pass').value!=document.getElementById('pas2').value )
	{
	    document.getElementById('pipa').src  = 'nonequal.png'
	    document.getElementById('pipa').style.filter   = 'grayscale(0)'
	    document.getElementById('pipa').style.opacity  =  1
        return
	}

    document.getElementById('pipa').src  = 'pipa.png'
    document.getElementById('pipa').style.filter   = 'grayscale(0)'
    document.getElementById('pipa').style.opacity  =  1

}


function randomjelszo()
    {
	betuk  = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789./+-*#&@!%'              // kis l, nagy I kihagyva
	jelszo = ''
	for( i=1; i<=8; i++)  jelszo += betuk.substr( Math.floor(Math.random()*betuk.length) , 1 )
	document.getElementById('pass').value = jelszo
	document.getElementById('pass').type  = 'text'
	document.getElementById('szem').src   = 'eye1.png'
	jelszoerosseg( jelszo )
	document.getElementById('pas2').value = ''
	egyezes()
    }


function CapsLock( esemeny )
    {
        document.getElementById('figyelmeztetes').innerHTML = ''
        if(esemeny.getModifierState('CapsLock')) {
            document.getElementById('figyelmeztetes').innerHTML = 'CapsLock be van kapcsolva!'
        }
    }


jelszoerosseg('')

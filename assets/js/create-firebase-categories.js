firebase.database().ref('/categories').child('basketball').set({
        'subcategories': {
            1:'NBA',
            2:'NCAAB'
        }
    });
    firebase.database().ref('/categories').child('hockey').set({
        'subcategories': {
            1:'NHL'
        }
    });
    firebase.database().ref('/categories').child('football').set({
        'subcategories': {
            1:'NFL',
            2:'NCAAF'
        }
    });
    firebase.database().ref('/categories').child('golf').set({
        'subcategories': {
            1:'PGA'
        }
    });
    firebase.database().ref('/categories').child('mma').set({
        'subcategories': {
            1:'UFC'
        }
    });
    firebase.database().ref('/categories').child('boxing').set({
        'subcategories': {
            1:'WBA'
        }
    });
    firebase.database().ref('/categories').child('tennis').set({
        'subcategories': {
            1:'WTA',
            2:'ATP'
        }
    });
    firebase.database().ref('/categories').child('baseball').set({
        'subcategories': {
            1:'MLB',
            2:'LMP'
        }
    });
    firebase.database().ref('/categories').child('soccer').set({
        'subcategories': {
            1:'Fifa World Cup',
            2:'UEFA Championship League',
            3:'UEFA Europa League',
            4:'English Premiere League',
            5:'English Championship',
            6:'English FA Cup',
            7:'Spanish La Liga',
            8:'German Bundesliga',
            9:'Italian Serie A',
            10:'French Ligue 1',
            11:'Major League Soccer',
            12:'Mexican Liga Bancomer',
            13:'Argentina 1era Division'
        }
    });
import * as lib0 from '../libraries/getRandomInt';

export function generateNameMan() {
    const names = ["Aí", "Ålfr", "Alfrig", "Alfrikr", "Alius", "Alþjöfr", "Alvís", "Ån", "Ånar", "Andvari", "Atvarðr", "Aurgrminir", "Aurvangr", "Austri", "Båfur", "Båri", "Berling", "Bifur", "Bildr", "Billingr", "Blåinn", "Blindviðr", "Blœvur", "Bömbur", "Brísingr", "Brokr", "Brúni", "Búinn", "Buri", "Dagfinnr", "Dåin", "Dåni", "Dari", "Dellingr", "Dolgr", "Dölgþrasir", "Döri", "Draupnir", "Dúfr", "Duneyr", "Duraþrör", "Durin", "Dúrnir", "Dvalin", "Eggmöinn", "Eikinskjaldi", "Eilífr", "Eitri", "Fafnir", "Fåinn", "Får", "Farli", "Fíli", "Finnr", "Fjalar", "Fjølsviðr", "Førvi", "Frægr", "Frår", "Fríðr", "Frosti", "Fullangr", "Fundin", "Gandålfr", "Galar", "Ginnar", "Glöi", "Gloni", "Gollmævill", "Grer", "Grímr", "Gud", "Gustr", "Hanar", "Hår", "Haugspori", "Hepti", "Heptifili", "Heri", "Herauðr", "Heriðr", "Hildingr", "Hleðjolfr", "Hlévangr", "Hljöðolfr", "Hornbori", "Hor", "Hreiðmar", "Hugstari", "Ívaldi", "Iri", "Jaki", "Jari", "Kili", "Líðskjalfr", "Litr", "Ljömi", "Lofar", "Löinn", "Miðvið", "Mjöðvitnir", "Mjøklituð", "Moinn", "Mondull", "Mötsognir", "Munin", "Nabbi", "Næfr", "Nåinn", "Nali", "Når", "Nefi", "Níðhøggr", "Niði", "Nípingr", "Norðri", "Nöri", "Nýi", "Nýr", "Nýråðr", "Óinn", "Olius", "Ór", "Óri", "Ótr", "Patti", "Råðspakr", "Råðsviðr", "Regin", "Rekkr", "Siar", "Sindri", "Skåvær", "Skafiðr", "Skirfir", "Suðri", "Svíur", "Þekkr", "Tigvi", "Þjöðrœrir", "Þjör", "Töki", "Þolinn", "Þorin", "Þråinn", "Þrasir", "Þrör", "Túta", "Úri", "Var", "Vegdrasill", "Veggr", "Veigr", "Vestri", "Viðr", "Vífir", "Viggr", "Vigr", "Vili", "Vindålfr", "Virwir", "Vitr", "Yngvi"];

    const prefix = function() {
        if (lib0.getRandomInt(0, 10) > 6) {
            const l0 = [ 'V', 'D', 'K', 'G'];
            const l1 = [ "orn", "ul", "igh", "agh", "or", "er", "en", "em" ];
            return l0[lib0.getRandomInt(0, (l0.length - 1))] + l1[lib0.getRandomInt(0, (l1.length - 1))] + ' ';
        } else {
            return '';
        }
    };
    
    var dwarfNameMan = prefix() + names[lib0.getRandomInt(0, (names.length - 1))];

	return dwarfNameMan;
}

export function generateNameWoman() {
    const names = ["Ålfhildr", "Alfhild", "Alruna", "Althjöfr", "An", "Atla", "Austriðr", "Dís", "Dröfn", "Dúfa", "Dúfr", "Eikinskjaldi", "Eitri", "Eitrdís", "Eyrgjafa", "Fafnisdís", "Fjölnirsdís", "Gjålp", "Gulla", "Hervör", "Hjördis", "Hreiðmarsdís", "Hreiðunn", "Huldra", "Ilmr", "Irpa", "Kåra", "Litr", "Lyngheiðr", "Lyngvi", "Njørðr", "Njørðrs Systir", "Órun", "Röskva", "Sindri", "Skaði", "Skøf", "Snotra", "Söl", "Þjöðvarta", "Þorgerðr Hölgabrúðr", "Vår", "Vör", "Þorgerðr Hølgabrúðr", "Meg Griffin"];

    const prefix = function() {
        if (lib0.getRandomInt(0, 10) > 6) {
            const l0 = [ 'V', 'D', 'K', 'G'];
            const l1 = [ "orn", "ul", "igh", "agh", "or", "er", "en", "em" ];
            return l0[lib0.getRandomInt(0, (l0.length - 1))] + l1[lib0.getRandomInt(0, (l1.length - 1))] + ' ';
        } else {
            return '';
        }
    };

	var dwarfNameWoman = prefix() + names[lib0.getRandomInt(0, (names.length - 1))];

	return dwarfNameWoman;
}

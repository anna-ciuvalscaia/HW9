import Product from '../domain/Product';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.png'

const product = {
    productDetail:  [
        new Product (
    1,
    'Miere', 
     img1, 
    'Mierea de albine nu este numai gustoasă, ci și un adevărat izvor de sănătate. Află care sunt beneficiile mierii de albine și profită de ele din plin.', 
    'Atenuează alergiile Mierea de albine are efecte anti-inflamatorii, motiv pentru care este indicată pentru a reduce simptomele ușoare ale alergiilor sezoniere. Mierea conține cantități mici de polen, iar dacă organismul este expus la cantități moderate, ea poate declanșa un răspuns imun al organismului care produce anticorpi la polen. Pe viitor, după expunerile repetate la polen, organismul uman se va obișnui cu factorii externi și nu va mai reacționa alergic, rezultând astfel un răspuns alergic mai mic.',
    120
    ),
    new Product (
        2,
        'Nuci', 
         img2, 
        'Nucile, pe lângă faptul că sunt un snack delicios şi consistent, joacă şi un rol important în sănătate, fiind o sursă de energie, antioxidanţi şi vitamine.',
        'Acizii omega 3 pe care nucile îi conţin protejează împotriva iregularităţii bătăilor inimii care duc la apariţia atacurilor de cord, scad nivelul de trigliceride şi colesterolul „rău“ şi îl cresc pe cel bun pentru organism.',
        90
        ),
        new Product (
            3,
            'Fructe uscate', 
             img3, 
            'Fructele uscate sunt bogate în fibre, carbohidraţi complecşi, vitamine şi minerale. Sunt o sursă constantă de energie, datorită conţinutului de zaharoză, fructoză şi glucoză naturală. ',
            'Fructele uscate trebuie consumate cu prudenţă de persoanele predispuse la obezitate, pentru că sunt bogate în calorii, carbohidraţi şi glucide. Trebuie ştiut că cele mai sănătoase fructe sunt cele uscate acasă, fără adaos de zahăr sau conservanţi. Iar dimensiunile reduse ale fructelor deshidratate invită la consumul unei cantităţi mai mari din aceste alimente. Un castron mic de caise uscate este echivalent cu trei sau patru caise întregi, proaspete. O ceaşcă de jumătăţi de caise proaspete conţine aproximativ 74 de calorii. O ceaşcă cu jumătăţi de caise uscate conţine de patru ori mai mult, 313 calorii.',
            180
            ),
    ]
}

export default product
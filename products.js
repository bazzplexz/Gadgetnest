/**
 * ============================================================
 *  GADGETNEST — PRODUCT DATA
 * ============================================================
 *
 *  To add a new product, simply copy one of the objects below
 *  and fill in the fields:
 *
 *  {
 *      name:     "Product Name",           // displayed on the card
 *      image:    "assets/your-image.jpg",   // path to the product image
 *      link:     "https://affiliate.link",  // your affiliate / buy link
 *      category: "category-name"            // used for filtering (optional)
 *  }
 *
 *  The page will automatically pick up any new entries!
 * ============================================================
 */

const PRODUCTS = [
    {
        name: "Portable Mini Fan",
        image: "assets/fan.jpeg",
        link: "https://amzn.to/4cHtqP8",  // <-- Replace with your affiliate link
        category: "electronics"
    },
    {
        name: "Travel Coffee Cup",
        image: "assets/coffee-cup.jpeg",
        link: "https://amzn.to/4udFRI8",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Cordless Portable Fan",
        image: "assets/CordlessPortablefan.png",
        link: "https://amzn.to/4d23TPq",  // <-- Replace with your affiliate link
        category: "Electronics"
    },
    {
        name: "NutriPro Smoothie Blender",
        image: "assets/nutrimix.png",
        link: "https://amzn.to/4ufgVAf",  // <-- Replace with your affiliate link
        category: "electronics"
    },
    {
        name: "Retractable ClothsLine",
        image: "assets/RetractableClothsline.png",
        link: "https://amzn.to/4tyuuut",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "NIIMBOT Label Maker",
        image: "assets/NIIMBOTB21LabelMaker.png",
        link: "https://amzn.to/4vY7Ih8",  // <-- Replace with your affiliate link
        category: "electronics"
    },
    {
        name: "18 Jar Rotating ",
        image: "assets/18jarroateing.png",
        link: "https://amzn.to/4dfXeS7",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Spice Rack RoundShape",
        image: "assets/Spicerackround.png",
        link: "https://amzn.to/4dfZtF1",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Lime Squeezer Green",
        image: "assets/Limesqueezer.png",
        link: "https://amzn.to/4cUqeyA",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Vegetables Drain Basket",
        image: "assets/Drainbasket.png",
        link: "https://amzn.to/3QCtfvP",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Storage Containers",
        image: "assets/storagecontainers.png",
        link: "https://amzn.to/3QG2hn0",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Ninja Ice Cream Maker",
        image: "assets/ninjaicecream.png",
        link: "https://amzn.to/4w3NFhG",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Quick Breakfast Maker",
        image: "assets/Breakfastmaker.png",
        link: "https://amzn.to/4cOMD1k",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "LED Book Reading Light",
        image: "assets/Ledreadinglight.png",
        link: "https://amzn.to/48Aq7qA",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Soap Box Punch Free",
        image: "assets/soapbox.png",
        link: "https://amzn.to/4cYQfg1",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Ice Nuggets Maker",
        image: "assets/Icenugets.png",
        link: "https://amzn.to/423rsT8",  // <-- Replace with your affiliate link
        category: "lifestyle"
   },
{
        name: "Mini cooler",
        image: "assets/minicooler.png",
        link: "https://amzn.to/4cZjgYZ",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Egg Slicer",
        image: "assets/eggslicer.png",
        link: "https://amzn.to/4eQeob1",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Embossing Machine Lebel",
        image: "assets/Embossinglabel.png",
        link: "https://amzn.to/4cZsqos",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Portable Ironing Machine",
        image: "assets/Portableironmachine.png",
        link: "https://amzn.to/49jLH2F",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Removable Handles",
        image: "assets/Removablehandle.png",
        link: "https://amzn.to/4ekiF6v",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Self Stirring Mug",
        image: "assets/selfstiringcup.png",
        link: "https://amzn.to/48tsWtp",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Electric Foldable Hot Water Cup",
        image: "assets/HotWatercup.png",
        link: "https://amzn.to/4tacRAm",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Dry Fruit Slicer",
        image: "assets/DryFruitSlicer.png",
        link: "https://amzn.to/3OOvQSW",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Portable Sealing Machine blue",
        image: "assets/minisealingblue.png",
        link: "https://amzn.to/3OCC7RH",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Portable Sealing Machine Pink",
        image: "assets/minisealingpink.png",
        link: "https://amzn.to/49nP9t8",  // <-- Replace with your affiliate link
        category: "lifestyle"
    }
,{
        name: "Refillable Perfume Bottles",
        image: "assets/perfumerefiler.png",
        link: "https://amzn.to/4wjmq2K",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Massager Gun",
        image: "assets/Massager.png",
        link: "https://amzn.to/4t4nIvv",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "3 Air Tight Glass Containers",
        image: "assets/3glassjar.png",
        link: "https://amzn.to/4n8j12D",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Digital Alarm Clock",
        image: "assets/DigitalalarmClock.png",
        link: "https://amzn.to/4w6ZFPc",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Honey Pot with Dipper",
        image: "assets/honeypot.png",
        link: "https://amzn.to/4dlgNt9",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Retro Wooden Bluetooth Speaker",
        image: "assets/woodenspeaker.png",
        link: "https://amzn.to/4cWjWOM",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Smart Temperature Mug Travel",
        image: "assets/smartmug.png",
        link: "https://amzn.to/4d3O2Qv",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Smart Planter",
        image: "assets/smartplanter.png",
        link: "https://amzn.to/4erI6Dl",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Charging Organizer",
        image: "assets/chargeorganizer.png",
        link: "https://amzn.to/4tkxqtZ",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Travel Toiletry Kit",
        image: "assets/traveltoiletrykit.png",
        link: "https://amzn.to/4tXrckM",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "LED Mirror Case",
        image: "assets/ledmirrorcase.png",
        link: "https://amzn.to/48Klx97",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },{
        name: "Slim Electric Tooth brush",
        image: "assets/electricToothbrush.png",
        link: "https://amzn.to/4uo74rU",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Silicone Straws",
        image: "assets/Siliconestraw.png",
        link: "https://amzn.to/4wd9XgS",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Egg Cooker",
        image: "assets/Eggcooker.png",
        link: "https://amzn.to/4nkrfoo",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Insulated Tumbler",
        image: "assets/insulatedtumbler.png",
        link: "https://amzn.to/4dcABOj",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Travel kit",
        image: "assets/travelkit.png",
        link: "https://www.flipkart.com/kkart-7-in-1-travel-toothbrush-kit-case-cover-plastic-holder/p/itmc847e106348a5",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
    {
        name: "Dish Cleaning Brush",
        image: "assets/Dishbrush.png",
        link: "https://amzn.to/4tjNZGo",  // <-- Replace with your affiliate link
        category: "lifestyle"
    },
{
        name: "Collapsible Cup",
        image: "assets/CollapsibleCup.png",
        link: "https://amzn.to/4f90XmJ",  // <-- Replace with your affiliate link
        category: "lifestyle"
    }
    // ──────────────────────────────────────────────
    //  ADD MORE PRODUCTS BELOW — just copy the block:
    // ──────────────────────────────────────────────
    // ,{
    //     name: "Your Product Name",
    //     image: "assets/your-image.jpg",
    //     link: "https://your-affiliate-link.com",
    //     category: "your-category"
    // }
];

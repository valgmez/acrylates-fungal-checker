export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  keywords: string;
  image?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-are-acrylates",
    title: "What Are Acrylates? A Complete Guide",
    description:
      "Learn everything about acrylates — the chemical family found in cosmetics, nail products, and adhesives that can cause allergic contact dermatitis. Understand the science behind acrylate allergies and how to protect yourself.",
    date: "2026-01-31",
    author: "Val",
    category: "Acrylates",
    image: "/images/blog/what-are-acrylates.jpg",
    keywords:
      "what are acrylates, acrylate allergy, contact dermatitis, cosmetic chemicals, methyl methacrylate, ethyl acrylate",
    content: `<p>If you've landed here, chances are you or someone you know has developed an allergy to acrylates — just like I did. After months of doing my gel nails at home, I woke up one day with swollen eyelids and a rash on my fingers, and it took months to figure out that acrylates were the culprit. I created this site because I know how isolating and confusing it feels, and I want to help others avoid the steep learning curve I faced. This guide covers everything I've learned about what acrylates are, where they hide, and how to protect yourself.</p>

<p>Acrylates are a family of synthetic chemicals derived from acrylic acid. They are among the most widely used compounds in modern manufacturing, found in everything from the gel polish on your nails to the adhesive on a bandage. While they serve important functional purposes in product formulation, acrylates have become a growing concern in dermatology due to their potential to cause allergic contact dermatitis, a painful and sometimes chronic skin condition.</p>

<h2>The Chemistry of Acrylates</h2>

<p>At a molecular level, acrylates are esters or salts of acrylic acid. The basic acrylic acid molecule (CH2=CHCOOH) can be modified to create hundreds of different acrylate compounds, each with slightly different properties. Common modifications include adding methyl groups (methyl methacrylate), ethyl groups (ethyl acrylate), or more complex side chains that alter the compound's flexibility, hardness, or reactivity.</p>

<p>This chemical versatility is precisely why acrylates are so prevalent in consumer products. They can be formulated to create hard, durable coatings (as in nail polish), flexible adhesives (as in lash glue), thickening agents (as in carbomers in skincare), or film-forming barriers (as in hair spray and setting sprays). The same molecular family that makes your nail polish chip-resistant also makes your false eyelash adhesive sticky.</p>

<h2>Where Are Acrylates Found?</h2>

<p>Acrylates appear in a surprisingly wide range of everyday products. In cosmetics and personal care, the most common sources include nail polish and nail art products (where they provide durability and adhesion), eyelash adhesives and lash extension glues, mascaras and eyeliners (as film-forming agents), hair sprays and styling products, setting sprays and makeup primers, and various skincare products that use carbomers as thickening agents.</p>

<p>Beyond cosmetics, acrylates are found in medical devices and supplies including wound dressings, medical tapes, and dental materials. They are also present in industrial adhesives, paints and coatings, printing inks, and some food packaging materials. For people with acrylate sensitivity, this widespread use makes complete avoidance challenging and requires careful product selection.</p>

<h2>How Acrylates Cause Allergic Reactions</h2>

<p>Acrylate allergy is a Type IV hypersensitivity reaction, also known as delayed-type hypersensitivity. Unlike immediate allergic reactions (such as peanut allergies), which involve IgE antibodies and occur within minutes, acrylate allergies involve T-cells and typically develop 24 to 72 hours after exposure. This delay can make it difficult to identify the specific product or ingredient causing the reaction.</p>

<p>The allergy develops through a process called sensitisation. When acrylate molecules come into contact with the skin, they bind to skin proteins, creating what immunologists call a hapten-protein complex. This complex is recognised by the immune system as foreign, triggering a T-cell response. With repeated exposure, the immune system becomes increasingly reactive, eventually producing visible symptoms.</p>

<p>It is important to understand that anyone can develop an acrylate allergy at any time, even after years of using products containing these chemicals without issue. The allergy is cumulative, meaning that each exposure increases the likelihood and severity of future reactions. This is why nail technicians, who handle acrylate-containing products daily, are among the highest-risk groups for developing severe acrylate allergies.</p>

<h2>Common Acrylate Compounds to Know</h2>

<p>There are dozens of acrylate compounds used in consumer products, but several are particularly common and worth recognising on ingredient labels. Ethyl acrylate is used as a fragrance ingredient and flavouring agent. Methyl methacrylate (MMA) was once widely used in nail products but is now restricted in many countries due to its high sensitisation potential. 2-Hydroxyethyl methacrylate (HEMA) is still commonly found in nail products, dental materials, and medical adhesives, and is one of the most frequently reported causes of acrylate allergy.</p>

<p>Other notable compounds include butyl acrylate (used in adhesives and coatings), ethyl methacrylate (EMA, a common replacement for MMA in nail products), and various acrylate copolymers used as film formers in cosmetics. Additionally, carbomers (polyacrylic acid derivatives) are found in countless skincare products as thickening agents, and while pure carbomers are generally considered low-risk for skin contact allergy, they are chemically related to acrylates and may be relevant for highly sensitive individuals.</p>

<h2>Recognising the Symptoms</h2>

<p>The symptoms of acrylate contact dermatitis can vary in severity and presentation. Common signs include redness and inflammation at the site of contact, itching or burning sensations, small blisters or welts that may weep or crust over, dry, cracked, or scaly skin, and in severe cases, swelling and pain. For nail product allergies, symptoms often appear on the eyelids, face, or neck rather than on the nails themselves, as the thin skin of the face is more susceptible to reactions.</p>

<p>If you suspect you have an acrylate allergy, the most reliable way to confirm the diagnosis is through patch testing performed by a dermatologist or allergist. During patch testing, small amounts of potential allergens (including various acrylate compounds) are applied to the skin on your back and left in place for 48 hours. The skin is then examined at 48 and 96 hours to identify any delayed reactions.</p>

<h2>Managing Acrylate Sensitivity</h2>

<p>The primary treatment for acrylate allergy is avoidance. Once you have been diagnosed, the most effective strategy is to systematically check all personal care products for acrylate ingredients. This is where tools like Acrylis can help — by pasting an ingredient list into my analyzer, you can quickly identify whether a product contains known acrylate compounds or related substances that may trigger a reaction.</p>

<p>In addition to avoidance, it is important to inform your healthcare providers about your acrylate allergy, particularly before dental procedures or medical treatments where acrylate-containing materials might be used. If you do experience a reaction, over-the-counter corticosteroid creams can help manage symptoms, but persistent or severe reactions should be evaluated by a healthcare professional.</p>`,
  },
  {
    slug: "understanding-malassezia-folliculitis",
    title:
      "Understanding Malassezia Folliculitis: Symptoms, Causes, and Treatment",
    description:
      "A comprehensive guide to fungal acne (Malassezia folliculitis) — what causes it, how to recognise the symptoms, evidence-based treatment approaches, and when to see a dermatologist.",
    date: "2026-02-14",
    author: "Val",
    category: "Fungal Acne",
    keywords:
      "malassezia folliculitis, fungal acne, pityrosporum, malassezia treatment, fungal acne symptoms, antifungal skincare",
    content: `<p>Malassezia folliculitis, commonly referred to as fungal acne, is a skin condition caused by an overgrowth of Malassezia yeast within hair follicles. Despite its popular name, it is not true acne at all but rather a yeast infection that produces acne-like symptoms. Because it looks similar to bacterial acne but requires entirely different treatment, misdiagnosis is common and can lead to months or even years of ineffective therapy and worsening symptoms.</p>

<h2>What Is Malassezia Yeast?</h2>

<p>Malassezia is a genus of lipophilic (fat-loving) yeast that is naturally present on the skin of approximately 90% of healthy adults. Under normal circumstances, these yeast organisms exist harmlessly on the skin surface, feeding on the sebum (natural oils) that our skin produces. There are at least 18 recognised species of Malassezia, with M. globosa, M. restricta, and M. sympodialis being the most commonly found on human skin.</p>

<p>Problems arise when the balance between Malassezia and the skin's microbiome is disrupted, allowing the yeast to proliferate excessively. This overgrowth can be triggered by various factors including warm, humid environments, excessive sweating, occlusive clothing or skincare products, hormonal changes, a diet high in sugars or refined carbohydrates, and the use of topical or oral antibiotics that disrupt the normal skin flora.</p>

<h2>Recognising the Symptoms</h2>

<p>One of the most important steps in managing Malassezia folliculitis is accurately identifying it. The condition typically presents as small, uniform, red or skin-coloured bumps (papules and pustules) that are often remarkably similar in size and shape, unlike bacterial acne which tends to produce more varied lesions. The bumps are usually accompanied by itching, which is often more intense than the itching associated with regular acne.</p>

<p>The distribution pattern is another key distinguishing feature. Fungal acne most commonly appears on the upper chest, upper back, and shoulders, with the forehead and hairline being other frequent locations. It is relatively rare on the lower face (cheeks and jawline), which is the area most commonly affected by bacterial acne. The lesions tend to cluster in areas of higher sebum production and warmth.</p>

<p>Perhaps the most telling diagnostic clue is how the condition responds to standard acne treatments. If your "acne" gets worse or stays the same after using typical acne-fighting products like benzoyl peroxide, salicylic acid, or topical retinoids, or if it initially improves with antibiotics but then returns even worse once the antibiotics are stopped, there is a strong possibility that you are dealing with Malassezia folliculitis rather than bacterial acne.</p>

<h2>Key Differences from Bacterial Acne</h2>

<p>Understanding the differences between fungal acne and bacterial acne is crucial for effective treatment. Bacterial acne (acne vulgaris) is caused by Cutibacterium acnes bacteria, which multiply in clogged pores and trigger inflammation. It features a mix of lesion types including blackheads, whiteheads, papules, pustules, and sometimes cysts, which can vary widely in size and appearance. It is most common on the lower face, jawline, and neck.</p>

<p>Malassezia folliculitis, in contrast, features uniform bumps that are similar in size and appearance, predominantly appears on the chest, back, and forehead, is usually itchy, and critically, often worsens with antibiotic treatment. This last point is particularly important because antibiotics kill the bacteria that normally keep Malassezia yeast in check. When these competing bacteria are eliminated, Malassezia can proliferate even more aggressively.</p>

<h2>Treatment Approaches</h2>

<p>Effective treatment of Malassezia folliculitis requires antifungal strategies rather than the antibacterial approaches used for regular acne. Topical antifungal treatments are usually the first line of defence. Ketoconazole shampoo (available over-the-counter in 1% strength or by prescription at 2%) can be used as a body wash, left on the skin for three to five minutes before rinsing. This is one of the most accessible and effective treatments for mild to moderate cases.</p>

<p>Other topical options include selenium sulfide shampoo (used similarly to ketoconazole), zinc pyrithione shampoo, and topical antifungal creams containing clotrimazole or miconazole. For more persistent or severe cases, oral antifungal medications such as itraconazole or fluconazole may be prescribed by a dermatologist. These are typically taken for one to three weeks and can produce dramatic improvement, though recurrence is possible if the underlying triggers are not addressed.</p>

<p>In addition to antifungal treatment, addressing the underlying triggers is essential for long-term management. This includes switching to skincare and haircare products that do not contain ingredients known to feed Malassezia (such as specific fatty acids, esters, and oils), wearing breathable fabrics, managing humidity and sweat, and making dietary adjustments if necessary. The Acrylis ingredient analyzer can help identify skincare products that may be contributing to the problem by checking for Malassezia-feeding ingredients.</p>

<h2>When to See a Dermatologist</h2>

<p>While mild cases of Malassezia folliculitis can often be managed with over-the-counter treatments and lifestyle adjustments, there are several situations where professional medical advice should be sought. If your symptoms do not improve after four to six weeks of consistent antifungal treatment, if the condition is spreading or worsening despite treatment, if the lesions are large, painful, or leaving scars, or if you are unsure whether you have fungal acne or bacterial acne, a dermatologist can provide an accurate diagnosis through clinical examination, skin scrapings, or fungal cultures.</p>

<p>A dermatologist can also prescribe stronger treatments, rule out other conditions with similar appearances (such as gram-negative folliculitis or eosinophilic pustular folliculitis), and create a comprehensive management plan tailored to your specific situation. Early professional consultation can save months of frustration and prevent unnecessary scarring.</p>`,
  },
  {
    slug: "how-to-read-skincare-ingredients",
    title: "How to Read Skincare Ingredient Lists Like a Pro",
    description:
      "Master the art of decoding skincare ingredient labels. Learn about INCI naming conventions, concentration-based ordering, how to identify hidden acrylates, and practical tips for using ingredient analysers effectively.",
    date: "2026-02-28",
    author: "Val",
    category: "Ingredient Education",
    keywords:
      "reading skincare labels, INCI names, ingredient list order, skincare ingredient guide, how to check cosmetics ingredients",
    content: `<p>If you have ever turned a skincare product around and stared blankly at the ingredient list, you are not alone. Those long strings of chemical names can feel like reading a foreign language. However, learning to decode ingredient lists is one of the most valuable skills you can develop for managing skin allergies, avoiding triggers, and making informed product choices. This guide will walk you through everything you need to know to read skincare ingredient labels like a professional.</p>

<h2>Understanding INCI Naming</h2>

<p>Skincare and cosmetic products use a standardised naming system called INCI, which stands for International Nomenclature of Cosmetic Ingredients. This system was developed to ensure consistency across products regardless of where they are sold. Under INCI rules, ingredients must be listed using their official Latin or scientific names rather than common names or marketing terms.</p>

<p>This is why you will see "Aqua" instead of "Water," "Glycerin" instead of "Glycerine," and "Tocopheryl Acetate" instead of "Vitamin E Acetate" on product labels. For plant-derived ingredients, the INCI system uses the Latin botanical name followed by the part of the plant used. For example, "Aloe Barbadensis Leaf Juice" is the INCI name for aloe vera gel. While this system can seem intimidating at first, it actually makes it easier to identify ingredients once you learn the naming patterns.</p>

<h2>The Concentration Rule</h2>

<p>One of the most important things to understand about ingredient lists is that ingredients are listed in descending order of concentration. The first ingredient on the list is present in the highest amount, and the last ingredient is present in the lowest amount. This rule applies to all ingredients present at concentrations above 1%.</p>

<p>This means that the first five ingredients typically make up the vast majority of the product formula. If a potentially irritating or allergenic ingredient appears in the first five positions, it is present in a significant concentration and more likely to cause problems. Conversely, an allergen listed near the end of a long ingredient list is present at a very low concentration and may not trigger a reaction in most people.</p>

<p>Ingredients present at concentrations of 1% or below can be listed in any order, which is why you will sometimes see groups of ingredients at the end of a label that appear to be organised alphabetically or by category rather than by concentration. Common ingredients that fall below the 1% threshold include preservatives, fragrances, colourants, and active ingredients that are effective at very low concentrations.</p>

<h2>Identifying Hidden Acrylates</h2>

<p>One of the biggest challenges for people with acrylate sensitivities is that acrylates often appear under names that do not obviously contain the word "acrylate." Learning to recognise these hidden names is essential for effective avoidance. Common acrylate-containing ingredients to watch for include any ingredient ending in "-acrylate" or "-acrylamide," ingredients containing "methacrylate," carbomers (which are polyacrylic acid derivatives), and certain copolymers and crosspolymers that may use acrylate monomers.</p>

<p>Particularly tricky are ingredients like "acrylates copolymer," "acrylates/C10-30 alkyl acrylate crosspolymer," "polyacrylate-3," and "polyacrylamide." These are often used as film formers, texture enhancers, or stabilisers in products where you might not expect to find acrylates, such as moisturisers, sunscreens, and hair products. Using an ingredient analyser like Acrylis can help catch these hidden sources that might be missed during a manual review.</p>

<h2>Understanding Ingredient Variations</h2>

<p>The same ingredient can appear under slightly different names on different product labels, which adds another layer of complexity. For example, "dimethicone" and "polydimethylsiloxane" are the same ingredient, as are "tocopherol" and "vitamin E." Regional variations also exist: "aluminium" (European spelling) and "aluminum" (American spelling) refer to the same element.</p>

<p>For acrylates specifically, be aware that variations like "ethyl acrylate" and "ethyl 2-propenoate" (the IUPAC name) refer to the same compound. Similarly, "2-hydroxyethyl methacrylate" may also appear as "HEMA" or "2-hydroxyethyl 2-methylpropenoate." Building familiarity with these naming variations will make your ingredient screening more thorough and reliable.</p>

<h2>Practical Tips for Using Ingredient Analysers</h2>

<p>To get the most accurate results when using an ingredient analyser like Acrylis, follow these best practices. First, copy the entire ingredient list exactly as it appears on the product label, including all commas and formatting. Some analysers parse ingredients by splitting on commas, so preserving the original formatting ensures accurate parsing. Second, include any sub-ingredients listed in parentheses, as these may contain hidden acrylates or fungal acne triggers.</p>

<p>Third, check products after any formula change. Brands frequently reformulate their products, and an ingredient list that was safe six months ago may contain new allergens today. This is especially common with seasonal product variations, "new and improved" formulations, and products from brands that source ingredients from multiple suppliers. Finally, if you are checking a product for both acrylates and fungal acne triggers, make sure to enable both analysis options in the tool, as some ingredients may be safe from one perspective but problematic from the other.</p>

<h2>Building Your Personal Ingredient Knowledge</h2>

<p>As you check more products, you will naturally build a mental database of common safe and unsafe ingredients. This knowledge becomes increasingly valuable over time, allowing you to quickly scan labels and identify potential problems without needing to check every product through an analyser. Keep a personal list of ingredients you know you react to, as well as products you have already verified as safe, to speed up future shopping trips. Many people find it helpful to take photos of ingredient lists on their phone for later reference or analysis.</p>`,
  },
  {
    slug: "acrylates-in-nail-products",
    title: "Acrylates in Nail Products: What to Avoid and Safe Alternatives",
    description:
      "Nail products are the number one source of acrylate exposure for consumers. Learn which nail products contain acrylates, the risks they pose, and discover safe acrylate-free alternatives for your nail care routine.",
    date: "2026-03-14",
    author: "Val",
    category: "Acrylates",
    keywords:
      "acrylates nail products, acrylate-free nail polish, gel nail allergy, methyl methacrylate nails, HEMA allergy, safe nail products",
    content: `<p>This is the article I wish I'd found before my allergy diagnosis. Gel polish was part of my self-care routine for years — I loved how it looked and how long it lasted. I had no idea that the chemicals in those little pots could trigger a reaction that would change my entire relationship with beauty products. If you've recently been told you have an acrylate allergy, or if you suspect gel nails might be causing your skin issues, I hope this guide helps you understand the risks and find safer alternatives faster than I did.</p>

<p>Nail products represent the single largest source of consumer exposure to acrylates. From traditional nail polish and gel systems to acrylic nail enhancements and lash adhesives, acrylate compounds are deeply embedded in the nail care industry. For anyone with an acrylate sensitivity, navigating the nail product aisle can feel like navigating a minefield. This guide will help you understand where the risks lie and how to find safer alternatives.</p>

<h2>Why Nail Products Contain Acrylates</h2>

<p>Acrylates are used in nail products for several important functional reasons. They provide adhesion, ensuring that nail polish bonds firmly to the natural nail surface. They create durable, chip-resistant films that maintain their appearance for days or weeks. They enable the curing process in gel and acrylic systems, where UV or LED light triggers a chemical reaction that hardens the product. And they contribute to the flexibility and strength of the finished nail enhancement.</p>

<p>The specific acrylate compounds used vary by product type. Traditional nail polishes typically use smaller amounts of acrylate copolymers as film formers. Gel polish systems rely heavily on acrylate monomers that are polymerised under UV or LED light. Acrylic nail systems (liquid and powder) use a mixture of ethyl methacrylate or methyl methacrylate monomer with a polymer powder. Each of these formulations presents different levels of risk for acrylate-sensitive individuals.</p>

<h2>The Riskiest Nail Products</h2>

<p>Gel nail systems and acrylic nail enhancements are generally considered the highest-risk nail products for acrylate-sensitive individuals. These products contain high concentrations of acrylate monomers, which are the most allergenic form of acrylates. During the application process, both the nail technician and the client are exposed to uncured monomers through skin contact and inhalation of vapours. Even after curing, some uncured monomer may remain on the nail surface, presenting an ongoing exposure risk.</p>

<p>Common acrylate compounds found in gel and acrylic nail systems include 2-hydroxyethyl methacrylate (HEMA), which is one of the most frequent causes of nail product allergy and is present in most gel polish formulations. Ethyl methacrylate (EMA) is used in many acrylic nail systems as a less-toxic alternative to methyl methacrylate. Hydroxypropyl methacrylate (HPMA) is another common gel system ingredient. Trimethylolpropane trimethacrylate (TMPTMA) serves as a crosslinking agent in some gel formulations.</p>

<p>Traditional nail polishes generally present a lower risk because the acrylate compounds they contain are typically in polymerised (cured) form, which is less allergenic than monomer form. However, some nail polishes still contain acrylate copolymers that may be problematic for highly sensitive individuals. Nail glue and lash adhesive products also contain acrylates and are a common source of sensitisation.</p>

<h2>Health Risks Beyond Skin Reactions</h2>

<p>While allergic contact dermatitis is the most common health concern associated with acrylate exposure from nail products, there are additional risks worth understanding. Nail technicians, who are exposed to acrylate vapours and skin contact on a daily basis, face elevated risks of respiratory issues including occupational asthma, chronic nail dystrophy (thinning, splitting, or loss of the natural nail), and cumulative sensitisation that can eventually preclude them from working with any acrylate-containing products.</p>

<p>For consumers, repeated gel or acrylic nail applications can weaken the natural nail plate, leading to thinning, peeling, and increased susceptibility to fungal and bacterial nail infections. The curing process, while it polymerises most of the monomer, does not eliminate all risk. Studies have shown that even properly cured gel nails can release small amounts of uncured monomer over time, particularly if the nails are damaged or worn down.</p>

<h2>Acrylate-Free Alternatives</h2>

<p>Fortunately, the nail care market has expanded significantly in recent years, and there are now genuine acrylate-free options available for most nail product categories. For nail polish, brands like <a href="https://amzn.to/3PbE9Zf" target="_blank" rel="noopener noreferrer sponsored">Manucurist (Green collection)</a> and <a href="https://amzn.to/4wEPdyY" target="_blank" rel="noopener noreferrer sponsored">Nail Kind</a> have developed plant-based formulas that avoid acrylate monomers and copolymers. Check our <a href="/recommendations">Recommendations page</a> for a verified, up-to-date list.</p>

<p>For false eyelash adhesive, magnetic lash systems — which use magnetic eyeliner rather than adhesive glue — completely eliminate the need for acrylate-based adhesives. Press-on nails from brands like <a href="https://amzn.to/4dsRV1p" target="_blank" rel="noopener noreferrer sponsored">imPRESS</a> use pre-applied adhesive tabs rather than liquid glue, which may be a safer option for some individuals with mild sensitivities.</p>

<p>For those who want to continue using gel or acrylic systems, some steps can reduce (though not eliminate) exposure risk. Ensuring proper curing time and using high-quality LED lamps can help polymerise more of the monomer. Applying a protective barrier cream around the nail area before product application can reduce skin contact. Working in a well-ventilated area and using a mask can reduce inhalation exposure. However, for individuals with confirmed acrylate allergies, the only truly safe approach is to avoid acrylate-containing nail products entirely.</p>

<h2>Talking to Your Nail Technician</h2>

<p>If you visit nail salons, it is important to communicate your acrylate allergy clearly to your nail technician. Bring a list of specific ingredients you need to avoid, and ask to see the ingredient lists of the products they use. Be aware that many salon products are labelled with trade names rather than full ingredient lists, which can make it difficult to assess safety. Consider bringing your own acrylate-free nail polish or products to the salon, and ask whether the technician can work with your preferred products.</p>

<p>For nail technicians who have developed occupational acrylate allergies, switching to acrylate-free product lines is essential for continuing to work safely. Several professional nail product brands now offer acrylate-free gel alternatives, and the market for these products continues to grow as awareness of acrylate sensitisation increases.</p>`,
  },
  {
    slug: "malassezia-and-fatty-acids-science",
    title: "The Science Behind Malassezia and Fatty Acids",
    description:
      "Understanding the biochemistry of Malassezia yeast and why certain fatty acids and esters in skincare products can trigger fungal acne flare-ups. A deep dive into carbon chain length, lipid metabolism, and ingredient safety.",
    date: "2026-03-28",
    author: "Val",
    category: "Fungal Acne",
    keywords:
      "malassezia fatty acids, carbon chain length, safe oils fungal acne, malassezia biochemistry, why oils cause fungal acne, lipid metabolism yeast",
    content: `<p>To effectively manage fungal acne, it helps to understand the underlying biochemistry of why certain skincare ingredients trigger flare-ups while others do not. The relationship between Malassezia yeast and fatty acids is not random — it follows specific biochemical rules based on the molecular structure of the ingredients we put on our skin. Understanding these rules empowers you to make genuinely informed decisions about which products are safe for your skin.</p>

<h2>Why Malassezia Needs Lipids</h2>

<p>Malassezia is a lipophilic yeast, meaning it requires lipids (fats) as a nutrient source. Unlike most other microorganisms found on the skin, Malassezia has lost the ability to synthesise certain essential fatty acids on its own. This is an unusual characteristic that makes the yeast entirely dependent on external lipid sources — primarily the sebum (natural oil) produced by your skin's sebaceous glands.</p>

<p>The yeast has evolved specialised enzymes called lipases that break down complex lipids into simpler fatty acids that it can absorb and metabolise. Different Malassezia species have different lipid preferences and enzymatic capabilities, which is why certain species are more associated with skin conditions than others. Malassezia globosa and Malassezia restricta, for example, are the species most commonly implicated in fungal acne and dandruff.</p>

<h2>The Carbon Chain Length Rule</h2>

<p>One of the most important concepts in understanding fungal acne triggers is carbon chain length. Fatty acids are characterised by the number of carbon atoms in their molecular chain, and this number critically determines whether a particular fatty acid can be metabolised by Malassezia.</p>

<p>Research has shown that Malassezia species can effectively metabolise fatty acids with carbon chain lengths between approximately C11 and C24. These medium-to-long chain fatty acids are the primary nutrients that support Malassezia growth. When you apply a skincare product containing oils or esters that are rich in these carbon chain lengths, you are essentially providing food for the yeast.</p>

<p>Conversely, fatty acids with very short carbon chains (typically C6 to C10) are generally not metabolised by Malassezia and are considered safe for fungal-acne-prone skin. This is why ingredients like caprylic acid (C8) and capric acid (C10), which are derived from coconut oil, are often listed as safe for fungal acne, while the full coconut oil (which contains longer-chain fatty acids like lauric acid C12) is sometimes flagged as problematic.</p>

<h2>Specific Problematic Fatty Acids</h2>

<p>Several fatty acids are well-established as Malassezia growth promoters and should be avoided by people with fungal acne. Oleic acid (C18:1), found in olive oil, sunflower oil, and many other plant oils, is one of the most potent Malassezia growth promoters. Linoleic acid (C18:2), abundant in safflower oil, sunflower oil, and soybean oil, similarly supports yeast growth. Palmitic acid (C16), stearic acid (C18), and myristic acid (C14) are other common fatty acids that can feed Malassezia.</p>

<p>When these fatty acids are present in skincare products, whether as standalone ingredients (like "oleic acid" on a label) or as components of natural oils (like "Olive Oil (Olea Europaea Fruit Oil)"), they can create a favourable environment for Malassezia proliferation. This is why even seemingly innocent products like natural face oils or oil-based serums can trigger fungal acne breakouts.</p>

<h2>Esters and the Hydrolysis Factor</h2>

<p>The situation becomes more complex when we consider esters. Many cosmetic ingredients are esters, which are compounds formed by combining a fatty acid with an alcohol. Common cosmetic esters include isopropyl myristate, cetyl palmitate, and various glyceryl esters used as emollients and texture enhancers.</p>

<p>The critical question for fungal acne is whether these esters can be broken down (hydrolysed) by Malassezia's lipase enzymes into their component fatty acids. If the yeast can break down an ester into its constituent fatty acid, and that fatty acid is in the C11-C24 range, then the ester is effectively a Malassezia food source. This is why many esters that contain problematic fatty acid components are flagged as fungal acne triggers, even though the intact ester molecule itself is not a fatty acid.</p>

<p>Polysorbates (such as polysorbate 20, 60, and 80) are another category of concern. These emulsifiers are esters of sorbitan and fatty acids, and they can be hydrolysed by Malassezia lipases, releasing the fatty acid components. This is why polysorbates are commonly listed as fungal acne triggers.</p>

<h2>Oils: The Nuanced Reality</h2>

<p>The fungal acne community often debates whether specific natural oils are safe or unsafe. The reality is nuanced because most natural oils contain a mixture of fatty acids with different carbon chain lengths. An oil is generally considered unsafe for fungal acne if a significant proportion of its fatty acid composition falls within the C11-C24 range that Malassezia can metabolise.</p>

<p>Coconut oil is a good example of this complexity. It contains caprylic acid (C8) and capric acid (C10), which are safe, but also contains lauric acid (C12), myristic acid (C14), and longer-chain fatty acids, which are problematic. The overall fatty acid profile of coconut oil makes it a moderate-to-high risk for fungal acne, despite containing some safe components. Pure caprylic/capric triglyceride (MCT oil), which isolates only the short-chain components, is a safer alternative.</p>

<p>Other commonly discussed oils include argan oil (moderate risk due to oleic and linoleic acid content), jojoba oil (technically a wax ester, generally considered low-to-moderate risk), squalane (a fully saturated hydrocarbon, generally considered safe), and mineral oil (a petroleum derivative, not metabolised by Malassezia, considered safe). The Acrylis fungal acne trigger database incorporates these fatty acid profiles to classify ingredients accurately.</p>

<h2>Practical Application</h2>

<p>Understanding this science does not mean you need to become a biochemist to manage your skincare routine. Instead, it provides a framework for understanding why certain ingredients are flagged and helps you make better decisions when encountering unfamiliar products. When you see an ingredient flagged by Acrylis as a fungal acne trigger, you can now understand that it is likely because the ingredient either contains, or can be broken down into, fatty acids with carbon chain lengths that Malassezia can metabolise.</p>

<p>This knowledge also helps explain why some products that are marketed as "natural" or "gentle" can still trigger fungal acne — it is not about whether an ingredient is natural or synthetic, but about its specific molecular structure and how it interacts with Malassezia biology.</p>`,
  },
  {
    slug: "safe-skincare-routine",
    title: "Building a Safe Skincare Routine for Acrylate-Allergic Skin",
    description:
      "A step-by-step guide to building a complete morning and evening skincare routine when you have acrylate sensitivities. Includes product recommendations, ingredient tips, and sample routines for different skin types.",
    date: "2026-04-11",
    author: "Val",
    category: "Skincare Routines",
    keywords:
      "acrylate allergy skincare routine, safe skincare routine, sensitive skincare routine, acrylate-free products",
    content: `<p>Building a skincare routine when you have acrylate sensitivities requires more thought and care than a standard routine, but it is entirely achievable once you understand the principles. The key is knowing which ingredients to seek out, which to avoid, and how to introduce new products safely. This guide provides practical, step-by-step routines for both morning and evening that you can adapt to your specific skin type and concerns.</p>

<h2>General Principles</h2>

<p>Before diving into specific routines, there are several overarching principles that apply regardless of your skin type or specific sensitivities. First, simplify your routine. Fewer products mean fewer potential exposure points to allergens. A basic routine of cleanser, moisturiser, and sunscreen is far safer than a multi-step regimen with serums, essences, toners, and masks. You can always add products back once you have identified a stable, safe base routine.</p>

<p>Second, always check new products with an ingredient analyser before purchasing. Even products marketed as "hypoallergenic," "sensitive," or "dermatologist-tested" may contain acrylates, as these marketing terms are not regulated in most countries. Third, patch test every new product, even if the ingredient list checks out as safe. Individual reactions can vary, and a product that is safe on paper may still cause problems for your specific skin.</p>

<p>Fourth, introduce only one new product at a time, waiting at least one to two weeks before adding another. This makes it possible to identify which product is responsible if you experience a reaction. Finally, keep a simple skincare journal noting which products you use and any reactions you observe. This record becomes increasingly valuable over time as you build a personal database of safe and unsafe products.</p>

<h2>Morning Routine</h2>

<p>The morning routine should focus on protection and preparation. Start with a gentle cleanser if you have oily skin, or simply rinse with water if your skin is normal to dry. Over-cleansing in the morning can strip the skin of its natural protective barrier. For cleansers, look for simple, low-ingredient formulas without acrylate-based thickeners — check our <a href="/recommendations">Recommendations page</a> for verified options.</p>

<p>Next, apply a lightweight moisturiser. For oily or combination skin, gel-based moisturisers are a good choice. For dry skin, cream-based moisturisers provide more hydration. In either case, check the ingredient list for acrylates (such as carbomers and acrylate copolymers). <a href="https://amzn.to/4ujY0on" target="_blank" rel="noopener noreferrer sponsored">Nivea Creme</a> is a reliable, widely available option with a simple ingredient list.</p>

<p>Sunscreen is the final and most important morning step. Look for mineral sunscreens (zinc oxide or titanium dioxide-based) or lightweight chemical SPFs with simple ingredient lists — and always run the label through the analyser first, as even many "mineral" sunscreens use acrylate-based thickeners. Two options I've personally verified are the <strong>OMI Sun Bears Active Protect Milk SPF 50+</strong> and the <strong>Nivea Sun UV Face Fluid</strong>, both of which are carbomer and octocrylene free. Check our <a href="/recommendations">Recommendations page</a> for links.</p>

<h2>Evening Routine</h2>

<p>The evening routine should focus on cleansing and repair. If you wear makeup or sunscreen during the day, consider double cleansing: first with an oil-based cleanser to remove makeup and sunscreen, then with a water-based cleanser to remove any remaining residue. For the oil-based cleanse, choose a simple plant oil or cleansing balm without known acrylates. Pure rosehip oil, pure argan oil, and squalane are all great acrylate-free options.</p>

<p>After cleansing, apply any treatment products your dermatologist has recommended. These might include prescription treatments for your specific skin condition. If you are using over-the-counter treatments, introduce them one at a time and monitor for reactions. Follow with your moisturiser, which can be the same one used in the morning or a richer formula for nighttime repair.</p>

<h2>Special Considerations for Different Skin Types</h2>

<p>For oily skin, the temptation to use harsh, stripping products is strong but counterproductive. Stripping the skin of its natural oils can trigger increased sebum production and compromise the skin barrier, making it more susceptible to irritation and contact dermatitis. Instead, use gentle, water-based cleansers and lightweight gel moisturisers. Products containing niacinamide can help regulate oil production without causing irritation.</p>

<p>For dry skin, focus on hydration and barrier repair. Look for moisturisers containing ceramides, hyaluronic acid, or glycerin as humectants. Avoid products with high alcohol content or strong surfactants. Using simple oils like squalane or MCT oil (caprylic/capric triglyceride) can also add safe, acrylate-free hydration.</p>

<p>For combination skin, you may need different products for different areas of your face. A common approach is to use a gentle, non-foaming cleanser on the entire face, a lighter moisturiser on the T-zone, and a slightly richer moisturiser on the cheeks. Patch testing becomes especially important for combination skin, as reactions may manifest differently in different zones.</p>

<h2>Products and Ingredients to Approach with Caution</h2>

<p>Even within safe-looking product categories, certain ingredients warrant extra caution. Sheet masks, while popular, are soaked in highly concentrated serums that may contain problematic ingredients like acrylate thickeners. Haircare products that rinse down onto your face and body in the shower can be an unexpected source of exposure. Leave-in hair treatments, dry shampoos, and hair sprays are particular concerns as they remain on the hair and can transfer to the skin throughout the day.</p>

<p>Body washes, lotions, and deodorants should also be checked if you experience body rashes. The chest and upper back are common sites for contact dermatitis, and body products are a frequent source of triggering ingredients. When checking body products, pay particular attention to the concentration of fragrance ingredients, which often contain acrylate fixatives.</p>`,
  },
  {
    slug: "hidden-acrylates-everyday-products",
    title: "Common Acrylates Hiding in Your Everyday Products",
    description:
      "Acrylates are not just in cosmetics. They hide in bandages, dental materials, food packaging, craft supplies, and more. Learn where unexpected acrylates lurk and how to audit your household products.",
    date: "2026-04-25",
    author: "Val",
    category: "Acrylates",
    keywords:
      "hidden acrylates, acrylates in everyday products, acrylate-free household products, acrylates bandages dental, unexpected acrylate sources",
    content: `<p>When most people think about acrylate allergies, they focus on cosmetics and nail products. However, acrylates are used so widely in manufacturing that they can be found in dozens of everyday household items that you might never think to check. For someone with a confirmed acrylate sensitivity, identifying and avoiding these hidden sources is just as important as checking skincare products. This guide explores the less obvious places where acrylates may be lurking in your daily life.</p>

<h2>Medical and First Aid Supplies</h2>

<p>One of the most common non-cosmetic sources of acrylate exposure is medical tape and adhesive bandages. Many adhesive bandages (including some well-known brands) use acrylate-based adhesives to stick to the skin. If you have ever developed a red, itchy rash under a bandage that persisted after the bandage was removed, acrylate allergy may have been the cause. Look for bandages and medical tapes specifically labelled as "acrylate-free" or "hypoallergenic," though be aware that "hypoallergenic" does not guarantee the absence of acrylates.</p>

<p>Dental materials are another significant source of hidden acrylates. Many dental composites (tooth-coloured fillings), bonding agents, and dental sealants contain methacrylate compounds. HEMA (2-hydroxyethyl methacrylate) and Bis-GMA (bisphenol A-glycidyl methacrylate) are commonly used in dental adhesives and can cause reactions in sensitised individuals, particularly on the oral mucosa and lips. If you experience unexplained lip or mouth irritation after dental work, inform your dentist about your acrylate allergy before future procedures.</p>

<p>Other medical products that may contain acrylates include wound dressings, electrocardiogram (ECG) electrodes, insulin pump adhesives, and some transdermal medication patches. If you have a confirmed acrylate allergy, it is important to inform all healthcare providers so they can select appropriate alternative products for your care.</p>

<h2>Eyeglasses and Sunglasses</h2>

<p>The nose pads and temple tips on eyeglasses and sunglasses are frequently coated with acrylate-based materials for comfort and durability. Additionally, some frame materials, particularly certain plastics and acetates, may contain acrylate compounds. If you develop contact dermatitis on the sides of your nose, behind your ears, or on your temples where your glasses contact your skin, acrylate components in your eyewear may be the culprit.</p>

<p>Solutions include switching to silicone nose pads, choosing frames made from hypoallergenic materials like titanium or stainless steel, and applying a clear barrier product (such as a hydrocolloid tape) to the areas where glasses contact the skin. When purchasing new eyewear, ask the optician about acrylate content in the frame materials and nose pads.</p>

<h2>Food Packaging and Containers</h2>

<p>Acrylate-based polymers are used in some food packaging materials, particularly in adhesive labels, container seals, and certain types of plastic wrap. While the risk of developing a reaction from food packaging alone is generally low (because the acrylates are typically in polymerised form and not in direct prolonged contact with skin), individuals with severe sensitivities may want to handle packaged foods with care and wash hands after removing labels or seals.</p>

<p>Reusable food containers made from certain plastics, particularly polycarbonate and acrylic containers, may also contain trace amounts of acrylate monomers. While the risk from food contact is minimal, heating food in acrylic containers can potentially increase the release of monomers. Glass or stainless steel containers are safe alternatives for food storage and heating.</p>

<h2>Craft Supplies and DIY Products</h2>

<p>Craft and hobby supplies are a frequently overlooked source of significant acrylate exposure. Craft glues (including white glue, super glue, and epoxy resins) contain various acrylate compounds. Acrylic paints, both artist-grade and craft-grade, contain acrylate polymers as binders. 3D printing resins used in SLA and DLP printers are typically methacrylate-based and are among the strongest sensitisers available to consumers.</p>

<p>Nail art supplies, including acrylic powders and liquids, gel nail kits, and nail art stickers with adhesive backing, are obvious sources. But even seemingly innocuous craft materials like modelling clay, fabric paints, and certain types of tape may contain acrylates. If you enjoy crafting and have an acrylate sensitivity, wearing nitrile gloves (not latex, which is a separate allergen) and working in a well-ventilated area can help reduce exposure risk.</p>

<h2>Electronics and Technology</h2>

<p>The protective coatings on smartphone screens, tablet displays, and laptop keyboards sometimes contain acrylate-based polymers. Screen protectors and device cases, particularly those made from soft-touch materials or with adhesive backing, may also be sources. If you notice skin irritation on your hands or face that correlates with using a specific device or accessory, acrylate components should be considered as a potential cause.</p>

<p>Headphone and earbud cushions, particularly those made from synthetic materials, may contain acrylates in the foam or coating. VR headset face cushions are another potential source due to the prolonged skin contact and warmth generated during use.</p>

<h2>Auditing Your Household</h2>

<p>Conducting a systematic audit of your household products is a worthwhile exercise for anyone with acrylate sensitivity. Start by listing all the products that come into regular contact with your skin: personal care products, medical supplies, eyewear, craft materials, and household cleaners. For each product, check the ingredient list (if available) for acrylate-related terms, or contact the manufacturer directly to ask about acrylate content in products without listed ingredients.</p>

<p>Prioritise the products that have the most prolonged and intimate skin contact. Bandages, dental materials, and eyewear should be addressed first, followed by personal care products, then household items with more incidental contact. Replace high-risk products with acrylate-free alternatives one at a time, and monitor your skin for improvement after each change. This systematic approach makes it possible to identify the most impactful sources of exposure without the confusion of making too many changes simultaneously.</p>`,
  },
  {
    slug: "database-methodology",
    title:
      "How I Built the Acrylis Ingredient Database: Methodology and Sources",
    description:
      "A transparent look at how the Acrylis ingredient database is compiled, the scientific sources behind the classifications, the matching algorithm, and plans for continuous improvement.",
    date: "2026-05-09",
    author: "Val",
    category: "Behind the Scenes",
    keywords:
      "acrylis database methodology, ingredient classification, acrylates matching algorithm, skincare data sources, acrylis how it works",
    content: `<p>Transparency is important to me. I believe users deserve to understand how the ingredient analyser works, what data it relies on, and what its limitations are. This article provides a detailed look at the methodology behind the acrylate and fungal acne trigger databases, the matching algorithm that powers the analysis, and my approach to maintaining and improving the data over time.</p>

<h2>Data Sources</h2>

<p>The ingredient databases are compiled from a combination of peer-reviewed scientific literature, established dermatological resources, and community-driven databases that have been validated by healthcare professionals. For the acrylates database, the primary sources include the American Academy of Dermatology (AAD) clinical guidelines on contact dermatitis, the North American Contact Dermatitis Group (NACDG) allergen prevalence data, DermNet NZ's comprehensive clinical resource on acrylate allergy, and the Contact Dermatitis Institute's allergen database.</p>

<p>For the fungal acne trigger database, the primary sources include the extensively researched Simple Skincare Science guide to Malassezia folliculitis, which compiles ingredient safety data from multiple dermatological studies and community testing. I also reference the Folliculitis Scout database, peer-reviewed research published through the National Center for Biotechnology Information (NCBI) on Malassezia lipid metabolism, and clinical guidelines from dermatological organisations on the management of Malassezia-related skin conditions.</p>

<h2>Ingredient Classification</h2>

<p>Each ingredient in my database is classified based on its known potential to cause allergic reactions or trigger Malassezia proliferation. For acrylates, ingredients are classified into three categories: "Unsafe" for ingredients that are established contact allergens with strong evidence from dermatological research; "Unknown" for ingredients that are chemically related to acrylates (such as certain copolymers and resins) but for which the allergenic potential is less well-characterised; and "Safe" for ingredients that are not known to be acrylates or cross-reactors.</p>

<p>For fungal acne triggers, ingredients are similarly classified based on their potential to feed Malassezia yeast. This classification considers the fatty acid composition of the ingredient, whether it can be hydrolysed by Malassezia lipase enzymes, and the available evidence from clinical studies and community reports. I err on the side of caution, flagging ingredients as triggers when there is reasonable evidence of risk, even if the evidence is not yet conclusive.</p>

<h2>The Matching Algorithm</h2>

<p>The Acrylis analysis tool uses a multi-stage matching algorithm to identify problematic ingredients. The first stage is exact matching: the input ingredient string is compared against my database using case-insensitive string comparison after normalising whitespace and common formatting variations. If an exact match is found, the ingredient is immediately flagged with its classification and explanation.</p>

<p>The second stage is substring matching: if no exact match is found, the algorithm checks whether the input ingredient contains known acrylate-related substrings. These include terms like "acrylate," "acrylamide," "methacryl," and "cryl," among others. Substring matches are flagged with an "Unknown" classification, as the exact compound may or may not be problematic depending on its specific chemical structure.</p>

<p>The third stage handles polyquaternium compounds and resin-related ingredients. Polyquaternium ingredients (commonly used as conditioning agents in haircare) are checked because some polyquaternium compounds use acrylate-based chemistry in their synthesis, though many are considered safe. Similarly, ingredients containing "resin" or "copolymer" in their name are flagged for review when no exact match is found, as some of these may contain acrylate monomers.</p>

<p>An important feature of the algorithm is the false positive filter. Certain ingredients that contain acrylate-related substrings but are not themselves acrylates or allergens are excluded from substring matching. For example, specific copolymer entries that have been verified as non-acrylate and non-allergenic are excluded to prevent unnecessary flags. This filter is continuously updated as new information becomes available.</p>

<h2>Privacy and the Client-Side Architecture</h2>

<p>One of the distinguishing features of Acrylis is that all analysis runs entirely in your browser. When you paste an ingredient list and click "Analyse," the processing happens on your device using JavaScript code that is part of the website. Your ingredient list is never transmitted to any server, stored in any database, or shared with anyone. This architecture was a deliberate design choice to protect user privacy, as ingredient lists can reveal personal health information and product preferences.</p>

<p>The practical implication of this client-side architecture is that the analyser works instantly, without waiting for server responses, and functions even without an internet connection once the page has loaded. However, it also means that the database cannot be updated in real-time — updates require publishing a new version of the website. I currently update the database approximately quarterly, incorporating new research findings and community feedback.</p>

<h2>Limitations and Future Plans</h2>

<p>I want to be transparent about the limitations of the current system. The database, while comprehensive, is not exhaustive. New cosmetic ingredients are developed regularly, and novel acrylate derivatives or Malassezia-feeding compounds may not yet be included. The substring matching algorithm may produce both false positives (flagging safe ingredients that contain acrylate-related substrings) and false negatives (missing acrylates that use non-standard naming). Individual skin reactions vary, and an ingredient that triggers a reaction in one person may not affect another.</p>

<p>Looking forward, I plan to implement several improvements to the system. These include adding a user feedback mechanism to report suspected false positives or false negatives, developing a more sophisticated matching algorithm that accounts for chemical structure rather than just string patterns, expanding the database to cover additional allergen categories (such as fragrances and preservatives), and consulting with dermatological researchers to validate and refine the classifications.</p>

<p>I'm committed to continuous improvement and welcome feedback from both users and healthcare professionals. If you notice an ingredient that you believe is incorrectly classified, please get in touch through my contact page with the specific ingredient name and any supporting evidence, such as a research paper or clinical guideline.</p>`,
  },
  {
    slug: "patch-testing-guide",
    title: "A Complete Guide to Patch Testing for Sensitive Skin",
    description:
      "Everything you need to know about patch testing — the at-home method, what to expect from professional dermatologist patch testing, how to interpret results, and common mistakes to avoid.",
    date: "2026-05-23",
    author: "Val",
    category: "Skincare Education",
    keywords:
      "patch testing guide, at-home patch test, dermatologist patch test, allergy testing skin, sensitive skin testing, contact allergy testing",
    content: `<p>Patch testing is one of the most valuable tools available for managing skin allergies and sensitivities. Whether you are trying to identify a specific product causing reactions or want to safely introduce new products into your routine, understanding how to patch test properly can save you from uncomfortable allergic reactions and help you build a reliable list of safe products. This guide covers both at-home patch testing and professional patch testing performed by dermatologists.</p>

<h2>What Is Patch Testing?</h2>

<p>Patch testing is a method of identifying substances that cause allergic contact dermatitis by applying small amounts of potential allergens to the skin and observing the reaction over a period of days. It is fundamentally different from prick testing (used for immediate-type allergies like hay fever) in that it detects delayed hypersensitivity reactions that develop over 24 to 96 hours. This delayed response pattern is exactly how acrylate allergies and many cosmetic ingredient sensitivities manifest, making patch testing the appropriate diagnostic method.</p>

<p>The basic principle is straightforward: apply a small amount of the test substance to a small area of skin, typically on the upper back or inner arm, secure it in place, leave it for a defined period, and then observe the skin for signs of reaction. The timing is critical because delayed reactions may not appear until two to four days after exposure, which is why patch testing requires patience and careful observation over multiple days.</p>

<h2>At-Home Patch Testing</h2>

<p>At-home patch testing is a practical way to check whether a specific skincare or cosmetic product is safe for your skin before using it on your face or body. While it cannot diagnose specific allergies (that requires professional patch testing with pure allergens), it can effectively identify whether a particular product formulation causes a reaction for you.</p>

<p>To perform an at-home patch test, start by choosing a test area. The inner forearm is a common choice because the skin is relatively thin and sensitive, making it a good predictor of facial reactions. Alternatively, the area behind the ear or on the upper back can be used. Clean the test area with plain water and pat dry — do not apply any other products to the area during the testing period.</p>

<p>Apply a small amount of the product (about the size of a pea) to the test area. For liquid products like serums or toners, you can apply a few drops to a cotton pad and tape it to the skin. For solid products like creams or balms, apply a thin layer directly. Cover the area with a waterproof adhesive bandage or patch to keep the product in place and prevent it from rubbing off. Leave the patch in place for 24 to 48 hours.</p>

<p>After removing the patch, observe the test area at 24 hours, 48 hours, and 72 hours after initial application. Look for any signs of reaction including redness extending beyond the application site, itching or burning at the test area, small bumps, blisters, or welts, swelling, or dry, flaky skin. A mild pinkness that fades within a few hours is usually not a concern and may simply be irritation from the adhesive. However, any reaction that persists beyond 24 hours, intensifies over time, or includes bumps, blisters, or intense itching suggests an allergic response.</p>

<h2>Professional Patch Testing</h2>

<p>If you suspect you have a specific allergy (such as to acrylates) but cannot identify the exact trigger through at-home testing, professional patch testing performed by a dermatologist or allergist is the gold standard. Professional patch testing uses standardised panels of pure allergens, allowing for precise identification of the specific substances causing your reactions.</p>

<p>The most commonly used system is the North American Contact Dermatitis Group (NACDG) standard series, which includes approximately 70 allergens that represent the most common causes of contact dermatitis. Additional specialised panels are available for specific allergen categories, including acrylates and methacrylates (particularly relevant for nail product and dental allergies), fragrance allergens, cosmetic preservatives, and metals.</p>

<p>During the procedure, small chambers containing minute amounts of each test allergen are taped to the skin on your back in two parallel rows. The patches remain in place for 48 hours. After removal, the dermatologist examines your skin and marks any reactions. A second reading is typically performed 24 to 96 hours after patch removal, as some reactions take longer to develop. In some cases, a third reading at seven days may be recommended for late-appearing reactions.</p>

<h2>Interpreting Results</h2>

<p>Patch test reactions are graded on a standardised scale that helps distinguish between allergic reactions and simple irritation. A negative reaction shows no visible difference from normal skin. A weak (1+) reaction shows mild redness and possibly slight papules in the test area. A strong (2+) reaction shows obvious redness, papules, and small vesicles. An extreme (3+) reaction shows intense redness, large vesicles or bullae, and may extend beyond the test area.</p>

<p>Irritant reactions, which are non-allergic, can sometimes be confused with true allergic reactions. Irritant reactions tend to be more sharply demarcated, resolve more quickly after the allergen is removed, and do not spread beyond the application site. An experienced dermatologist can usually distinguish between irritant and allergic reactions based on their clinical appearance and timing.</p>

<h2>Common Mistakes to Avoid</h2>

<p>Several common mistakes can compromise the accuracy of patch testing. Testing on skin that is already irritated, sunburned, or affected by eczema can produce unreliable results. Testing too many products simultaneously makes it impossible to identify which product caused a reaction if one occurs. Removing the patch too early (before 24 hours) may miss delayed reactions that have not yet developed. Applying too much product can cause irritation that mimics an allergic reaction. Failing to observe at multiple time points can miss reactions that appear later. And using expired or degraded products may produce reactions that would not occur with fresh product.</p>

<p>Another important consideration is that patch testing only identifies contact allergies (Type IV hypersensitivity). It does not test for immediate-type allergies (Type I hypersensitivity), food allergies, or intolerances. If you experience symptoms like hives, swelling, or difficulty breathing immediately after exposure to a product, this is a medical emergency that requires immediate attention and is not something that can be diagnosed through patch testing.</p>

<h2>Building Your Safe Product List</h2>

<p>Over time, patch testing allows you to build a personal list of products and ingredients that are safe for your skin. This list becomes an invaluable resource for shopping and simplifying your skincare routine. Many people find it helpful to maintain a digital list (on their phone or computer) of verified safe products, along with the date they were tested and any notes about the testing conditions.</p>

<p>Remember that product formulations can change without notice, so periodically re-testing products that you use regularly is a good practice, especially if you notice a change in the product's appearance, scent, or texture. If a product that was previously safe starts causing reactions, check the ingredient list for changes and consider patch testing again to confirm the new formula is safe.</p>`,
  },
  {
    slug: "current-routine-barrier-repair",
    title: "My Current Routine for Dehydrated, Reaction-Prone Skin",
    description:
      "My current skincare routine for dehydrated skin prone to closed comedones, fungal acne, and acrylates allergy. Focusing on barrier repair has yielded great results.",
    date: "2026-06-06",
    author: "Val",
    category: "Skincare Routines",
    keywords:
      "skincare routine, dehydrated skin, closed comedones, fungal acne, acrylates allergy, skin barrier repair, azelaic acid",
    content: `<p>My face is very dehydrated, prone to closed comedones, prone to fungal acne, and I have an acrylates allergy. For the last month, I've been working on strengthening my skin barrier, and I can finally see some good results. Navigating all these conflicting skin concerns is challenging, but here is the routine that is currently working for me.</p>

<h2>Hydration & Barrier Repair</h2>

<p>I start my routine with the <a href="https://amzn.to/3RcgLeJ" target="_blank" rel="noopener noreferrer sponsored"><strong>Haruharu Wonder Black Rice Hyaluronic Toner (Fragrance Free)</strong></a>. It is beautifully hydrating and safe for my sensitivities.</p>

<p>Followed by this, I use <a href="https://amzn.to/4wCq5cb" target="_blank" rel="noopener noreferrer sponsored"><strong>The Ordinary Aloe 2% + NAG 2% Solution</strong></a>. It is a very lightweight serum that helps soothe my skin without clogging pores or feeding Malassezia.</p>

<p>Next, I go in with <a href="https://amzn.to/4eI2TTj" target="_blank" rel="noopener noreferrer sponsored"><strong>The Ordinary Soothing &amp; Barrier Support Serum</strong></a>. This has been instrumental in my barrier repair journey over the last month.</p>

<p>When my skin feels like it needs extra help, I add <a href="https://amzn.to/4tQ3ciQ" target="_blank" rel="noopener noreferrer sponsored"><strong>The Ordinary Natural Moisturizing Factors + PhytoCeramides</strong></a> cream. It is rich and provides the perfect occlusive layer to prevent transepidermal water loss overnight.</p>

<h2>Sun Protection</h2>

<p>For my SPF, I am currently using the <a href="https://www.yesstyle.com/en/omi-sun-bears-active-protect-milk-sunscreen-spf-50-pa-30g/info.html/pid.1112540945?utm_medium=LinkShare&utm_source=dynamic&mcg=influencer" target="_blank" rel="noopener noreferrer sponsored"><strong>Omi Sun Bears Active Protect Milk</strong></a>. Finding an SPF that ticks all the boxes for fungal acne and an acrylates allergy is incredibly difficult, but this one works well for my skin.</p>

<h2>Treating Red Marks &amp; Old Acne</h2>

<p>To get rid of active red marks from old acne breakouts, I rely on Azelaic Acid. I rotate between a few choices depending on what I have available:</p>
<ul>
  <li><strong>Cos De BAHA Azelaic Acid Cream/Serum</strong></li>
  <li><a href="https://www.yesstyle.com/en/vt-azelaic-a1-calming-ampoule-30ml/info.html/pid.1134366027?utm_medium=LinkShare&utm_source=dynamic&mcg=influencer" target="_blank" rel="noopener noreferrer sponsored"><strong>VT Cosmetics Azelaic Acid Serum</strong></a></li>
  <li><strong>Skinoren Azelaic Acid Cream</strong></li>
</ul>

<p>Azelaic acid is incredibly effective for post-inflammatory erythema (PIE) and helps keep my skin clear without the irritation that sometimes comes with other actives.</p>

<h2>Weekly Exfoliation</h2>

<p>Once a week, I use <a href="https://amzn.to/4ngREDk" target="_blank" rel="noopener noreferrer sponsored"><strong>The Ordinary Salicylic Acid BHA</strong></a> to help prevent closed comedones. However, because my barrier is my main priority, I always make sure to pair this with the Soothing &amp; Barrier Support Serum and the PhytoCeramides cream. This ensures I get the exfoliating benefits without compromising my skin's hydration.</p>`,
  },
  {
    slug: "my-acrylate-allergy-story",
    title: "How I Discovered My Acrylate Allergy: My Personal Story",
    description: "My personal journey of discovering an acrylate allergy and navigating the confusing world of skincare ingredients.",
    date: "2026-06-20",
    author: "Val",
    category: "My Story",
    keywords: "acrylate allergy story, gel nail allergy, HEMA allergy, skin barrier journey, fungal acne story",
    content: `<p>About two years ago, I started noticing some weird patterns with my skin. I'd been doing my own gel nails for a while—nothing excessive, I just liked doing them. But then a small, itchy patch appeared on my wrist. I didn't think much of it at first, assuming it was just dry skin from the UV lamp or a random reaction to something else.</p>

<p>Over the next few months, things got more confusing. I started seeing these stubborn little bumps all over my face, especially around the bottom of my cheeks. They weren't particularly itchy, just persistent. However, whenever I had a "flare-up," it was impossible to ignore—my eyelids would swell and get incredibly itchy. It was a strange situation because I wasn't using any nail products on my face, yet my face was clearly reacting.</p>

<p>The breaking point was the very last time I did my nails. Within a couple of hours of finishing the set, I felt dizzy and my skin started crawling. My wrists and face were intensely itchy, and even my breathing felt slightly off. It was a scary experience, and I ended up soaking them off that same evening. I haven't touched gel polish since.</p>

<p>Initially, I was convinced it was just a HEMA allergy, which is common with gel nails. I figured that by stopping the nails, my skin would clear up. But the little bumps on my jawline stayed, and that spot on my wrist kept flaring up at random times. It didn't make sense if the source was gone.</p>

<p>That's when I started looking at the ingredients in my skincare. At the time, I was using the <strong>Ongredients Skin Barrier Calming Lotion</strong>, thinking it would help calm down the irritation. But surprise, surprise—it was actually making everything worse because it contains Carbomer. I didn't know Carbomer was a polyacrylic acid. My "safe" moisturizer was actually keeping my reaction alive. Once I removed everything containing acrylate derivatives, those stubborn bumps finally cleared up within a few days.</p>

<p>To make matters more complicated, I was also dealing with fungal acne, which flared up after I started birth control for endometriosis around the same time. Finding products that didn't trigger my acrylate allergy <em>and</em> didn't feed the fungal acne was a nightmare. I spent so much time cross-referencing ingredient lists that I eventually just decided to build this tool to do it for me.</p>

<p>I've also got a lavender allergy to deal with, which just adds another layer to the search for safe products. If you're struggling to figure out why your skin is acting up, I hope this analyzer makes your journey a bit easier than mine was. It's frustrating to deal with, but identifying the triggers makes all the difference.</p>`
  },
  {
    slug: "flaxseed-gel-hair-care",
    title: "Why I Switched to DIY Flaxseed Gel for my 2c/3a Hair",
    description: "How I use DIY flaxseed gel to get a perfect cast for my 2c/3a curls without triggering my acrylate allergy.",
    date: "2026-07-04",
    author: "Val",
    category: "Haircare",
    keywords: "flaxseed gel, 2c curls, 3a curls, acrylate-free hair gel, natural hair care, DIY flaxseed gel recipe",
    content: `<p>If you have wavy or curly hair, you probably know the struggle of finding a gel that actually gives you a decent cast. For my <strong>2c/3a hair</strong>, most "natural" products were either too heavy or just didn't hold. And once I realized I was developing an allergy to acrylates, the search for a store-bought gel that worked became impossible.</p>

<p>I actually started making my own flaxseed gel a couple of years before the allergy even showed up. I was just tired of my favorite products getting reformulated or the prices jumping up, all while my hair was getting more and more damaged. Now that I have to avoid acrylates, this DIY gel is my absolute staple.</p>

<h2>The Quest for the "Cast"</h2>

<p>The main reason I stick with flaxseed gel isn't just because it's safe—it's because it actually works. I struggled for years to find a gel that gave me that hard, crunchy "cast" that you can scrunch out once dry. This stuff gives me better definition and shine than any of the expensive synthetic gels I used to buy.</p>

<h2>The Recipe (1:8 Ratio)</h2>

<p>I’ve experimented with a lot of ratios, but this is the one that gives me the best consistency for my curls. I use a simple 100ml scoop (which is slightly less than <strong>1/2 a cup</strong>) as my measurement base.</p>

<ul>
  <li><a href="https://amzn.to/4tyZART" target="_blank" rel="noopener noreferrer sponsored"><strong>1 part (100ml) Organic Flaxseeds</strong></a></li>
  <li><strong>8 parts (800ml) Water</strong></li>
  <li><strong>Optional:</strong> A couple of drops of Vitamin E oil (helps with hair health).</li>
</ul>

<p><strong>Method:</strong> I simmer the seeds and water for exactly <strong>7 minutes</strong>. You want it to reach a thin, egg-white consistency. If you over-boil it, it becomes a nightmare to work with.</p>

<p><strong>The French Press Hack:</strong> Forget straining through tights or a sieve—it’s too messy. The absolute best way to strain it is to pour the hot mixture into a <strong>French Press</strong>. Just push the plunger down slowly, and the seeds stay at the bottom while the clean gel stays at the top. It’s a total game-changer.</p>

<h2>Storage & Freezing</h2>

<p>Since it has no preservatives, it doesn't last long. I make a big batch every 3 weeks to save time. I keep enough for one week in a jar in the fridge, and I <strong>freeze the rest</strong> in small containers or an ice cube tray.</p>

<p>When you thaw it out, the consistency changes slightly (it can get a bit watery or lumpy), but if you give it a quick blend or just shake it up, it works perfectly. In fact, I sometimes find it works <em>better</em> after freezing because the "actual gel" separates from the excess water, making it even more concentrated.</p>

<p>It’s a bit of a learning curve, but for the sake of healthy hair and clear skin, it’s worth the 15 minutes of effort every few weeks.</p>`
  },
  {
    slug: "carbomer-in-lubricants-burning",
    title: "The Ingredient in My Lube That My Doctors Mistook for Vaginismus",
    description: "How a common acrylate-based thickener called Carbomer in lubricants caused chronic burning that felt like pelvic pain.",
    date: "2026-07-18",
    author: "Val",
    category: "My Story",
    keywords: "carbomer allergy, vaginismus, burning sensation, lubricant ingredients, Liquid Silk, acrylate allergy",
    content: `<p>For over a year, intimacy was incredibly painful. I was experiencing a persistent burning sensation right at the vaginal entrance that made physical contact almost impossible. My doctor suspected <strong>vaginismus</strong> and referred me for pelvic floor physiotherapy.</p>

<p>The physiotherapy confirmed that I did have a tight pelvic floor, and I also have endometriosis, which causes pain deeper inside my pelvis and towards the back. But despite months of treatment, the burning at the entrance never improved. I spent a lot of time reading forums, doing pelvic floor exercises, and feeling incredibly frustrated and anxious. It was a really lonely experience.</p>

<p>Then I finally discovered my acrylate allergy. I started checking the ingredient lists of absolutely everything that came into contact with my skin. That's when it hit me: I needed to check my lubricant.</p>

<h2>The Culprit: Carbomer</h2>

<p>Sure enough, right there on the ingredient list was <strong>Carbomer</strong>. Also known as polyacrylic acid, carbomer is a synthetic polymer used in most water-based lubricants to give them their thick, slippery gel consistency.</p>

<p>Because my allergy is a delayed hypersensitivity reaction, I never connected the dots. The burning often lasted for days after using the lubricant, making it seem like a muscular or structural problem rather than a reaction to an ingredient. The tissue around the vaginal entrance is incredibly delicate, and in my case, repeated exposure to an acrylate-based ingredient appeared to keep it in a constant state of irritation.</p>

<p>I started trying different lubricants, carefully checking every ingredient list to avoid carbomer and other acrylate-based ingredients. After going through several products, I eventually found one that worked for me.</p>

<p>Within less than a week of switching lubricants, the burning at the vaginal entrance completely disappeared. Neither the pelvic floor physiotherapy nor my later laparoscopy changed that specific symptom. They helped address other issues, but in <strong>my particular case</strong>, the entrance pain was caused by the lubricant, not by my pelvic floor muscles.</p>

<h2>My Safe Alternative: Liquid Silk</h2>

<p>Finding a lubricant without carbomer was surprisingly difficult because almost every water-based option I found contained it. I eventually switched to <a href="https://amzn.to/3PE4gN9" target="_blank" rel="noopener noreferrer sponsored"><strong>Liquid Silk</strong></a>.</p>

<p>Liquid Silk is a silicone-based formula (ingredients: Cyclomethicone, Dimethiconol, Dimethicone). It contains:</p>

<ul>
  <li>No carbomer</li>
  <li>No acrylates</li>
  <li>No parabens</li>
</ul>

<p>It has been a lifesaver. It doesn't cause any irritation, doesn't dry out quickly like many water-based gels, and most importantly, it doesn't trigger the burning. (Note: Silicone lubricants aren't compatible with silicone toys, but for everyday use, it's the safest option I've found.)</p>

<p>I'm not saying that everyone diagnosed with vaginismus or vulvodynia has the same cause. Many people genuinely have pelvic floor dysfunction, nerve pain, or other underlying conditions. In fact, I still have a tight pelvic floor and pain from endometriosis. But if your burning is unexplained, especially if you also react to acrylates in other products, it's worth checking the ingredients in anything that comes into contact with the area. Sometimes the culprit isn't your body—it's something you're putting on it.</p>`
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

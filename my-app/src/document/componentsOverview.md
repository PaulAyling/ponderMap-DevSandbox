# OVERALL APP PLAN
    Main components:
    Document, 
        Card 
            CardHeader
            CardBody
            CardChildren  -> ....Card

    Example:
    Document            {startingId}
        Card (A)
            CardHeader      {link and title are edited}
            CardBody        {notes & image}
                CardChildren    {the children ids are genreated and looped accroos as many cards as required}
                    Card (B1)     
                    Card (B2)
                    Card (B3) 

# Card
    // Create state for managing drill throughs and toggles
    // load documentContext & load formatting presets
    RENDER
        <CardHeader id={props.id}>
        <CardBody>
        <CardChildren>

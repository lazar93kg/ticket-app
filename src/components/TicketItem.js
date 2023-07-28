const TicketItem = (props) => {

    const eventSingle = props.item;

    return (
        <section className="ticket-receipt">
            <h4>WHAT</h4>
            <h1>{eventSingle.name}</h1>
            <div className="tr-place">
                <h4>WHERE</h4>
                <h3>{eventSingle.where}</h3>
                <p>Göteborgs universitet. Pedagogen, hus A</p>
            </div>
            <div className="tr-date">
                <div>
                    <h4>WHEN</h4>
                    <h3>{eventSingle.when.date}</h3>
                </div>
                <div className="div-dot"><h4>FROM</h4>
                    <h3>{eventSingle.when.from}</h3></div>
                <div><h4>TO</h4>
                    <h3>{eventSingle.when.to}</h3></div>
            </div>
            <div className="tr-info">
                <h4>INFO</h4>
                <p>Section C - seat 233, bring umbrella</p>
                <div className="barcode"><h1>Libre</h1>
                    <h4>#A2ED7</h4></div>
            </div>
        </section>
    );
};

export default TicketItem;

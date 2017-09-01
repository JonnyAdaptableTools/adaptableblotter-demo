import { ITrade } from './Trade'
export class DataGenerator {

    getTrades(): ITrade[] {
        var trades: ITrade[] = [];
        for (var i = 1; i < 301; i++) {
            var trade = this.createTrade(i);
            trades.push(trade);
        }
        return trades;
    }

    startTickingDataKendo(grid: kendo.ui.Grid) {
        // setInterval(() => {
        //     let numberToAdd: number = this.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
        //     //pick a random trade in the first ten
        //     let trade = this.getRandomItem(grid.dataSource.data(), 10);
        //     //pick a random colum in the numeric col
        //     let columnName = this.getRandomItem(this._numericCols);
        //     let initialNewValue = trade[columnName];
        //     let newValue = initialNewValue + numberToAdd;
        //     //for now I decide to use dataItem.set but we'll need to see how the fuck people are 
        //     //managing ticking data since the grid doesn't allow partial refresh... so if we keep calling sync on 
        //     //every tick the grid becomes unusable since we loose editing, cell selection etc......
        //     //also if people call sync then we don't have the "change" event

        //     // JW. Im still not sure that the crude cell.html isnt the easiest after all so long as we make sure it covers all bases
        //     // as that way at least we dont refresh anything etc and it has no impact.
        //     //   trade.set(columnName, newValue);

        //     //trade[columnName] = newValue;
        //     //trade.dirty = true;
        //     //grid.dataSource.sync();
        // }, 5000)
    }

    startTickingDataHypergrid(grid: any) {
        setInterval(() => {
            let numberToAdd: number = this.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
            let trade = this.getRandomItem(grid.behavior.getData(), 30);
            let columnName = "price";
            let initialNewValue = trade[columnName];
            let newValue = this.roundTo4Dp(initialNewValue + numberToAdd);
            trade[columnName] = newValue;

            trade["ask"] = this.roundTo4Dp(trade["price"] - trade["bidOfferSpread"] / 2);
            trade["bid"] = this.roundTo4Dp(trade["price"] + trade["bidOfferSpread"] / 2);

            trade["bloombergAsk"] = this.roundTo4Dp(trade["ask"] + 0.01);
            trade["bloombergBid"] = this.roundTo4Dp(trade["bid"] - 0.01);
            grid.behavior.reindex();
            grid.repaint()
        }, 100)
    }

    startTickingDataagGrid(gridOptions: any) {
        setInterval(() => {
            let tradeId = this.generateRandomInt(0, 29);
            gridOptions.api.forEachNode((rowNode: any, index: number) => {
                if (rowNode.group) {
                    return;
                }
                let rowTradeId = gridOptions.api.getValue("tradeId", rowNode);
                // only do first 30
                if (rowTradeId != tradeId) { return; }

                let numberToAdd: number = this.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
                let trade = rowNode;
                let columnName = "price";
                let initialNewValue = gridOptions.api.getValue(columnName, trade);
                let newValue = this.roundTo4Dp(initialNewValue + numberToAdd);
                trade.setDataValue(columnName, newValue)
                let ask = this.roundTo4Dp(gridOptions.api.getValue("price", trade) - gridOptions.api.getValue("bidOfferSpread", trade) / 2);
                trade.setDataValue("ask", ask)
                let bid = this.roundTo4Dp(gridOptions.api.getValue("price", trade) + gridOptions.api.getValue("bidOfferSpread", trade) / 2);
                trade.setDataValue("bid", bid)

                trade.setDataValue("bloombergAsk", this.roundTo4Dp(ask + 0.01))
                trade.setDataValue("bloombergBid", this.roundTo4Dp(bid - 0.01))

            });
        }, 100)
    }

    createTrade(i: number): ITrade {
        var price = this.getMeaningfulDouble();
        var bidOfferSpread = this.getRandomItem(this.getBidOfferSpreads());
        var ask = this.roundTo4Dp(price + bidOfferSpread / 2);
        var bid = this.roundTo4Dp(price - bidOfferSpread / 2);
        var tradeDate = this.generateRandomDateAndTime(-1000, 1000);
        var moodyRating = this.getRandomItem(this.getMoodysRatings())
        var trade =
            {
                "tradeId": i,
                "notional": this.getRandomItem(this.getNotionals()),
                "deskId": this.generateRandomInt(0, 250),
                "counterparty": this.getRandomItem(this.getCounterparties()),
                "currency": this.getRandomItem(this.getCurrencies()),
                "country": this.getRandomItem(this.getCountries()),
                "changeOnYear": this.getMeaningfulPositiveNegativeDouble(),
                "price": price,
                "bid": bid,
                "ask": ask,
                "bidOfferSpread": bidOfferSpread,
                "isLive": this.generateRandomBool(),
                "moodysRating": moodyRating,
                "fitchRating": this.getRatingFromMoodyRating(moodyRating),
                "sandpRating": this.getRatingFromMoodyRating(moodyRating),
                "tradeDate": tradeDate,
                "settlementDate": this.addDays(tradeDate, 3),
                "bloombergAsk": this.roundTo4Dp(ask + 0.01),
                "bloombergBid": this.roundTo4Dp(bid - 0.01),
                "percentChange": this.generateRandomNullableDouble(),
                "bookingGuid": this.generateUuid(),
                "lastUpdated": this.generateRandomDateAndTime(-7, 0),
                "lastUpdatedBy": this.getRandomItem(this.getNames())
            };
        return trade;
    }

    protected generateUuid(): string {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            c => {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
            });
        return uuid;
    }

    // If minValue is 1 and maxValue is 2, then Math.random()*(maxValue-minValue+1)
    // generates a value between 0 and 2 =[0, 2), adding 1 makes this
    // [1, 3) and Math.floor gives 1 or 2.
    public generateRandomInt(minValue: number, maxValue: number): number {
        return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    }


    protected generateRandomBool(): boolean {
        var amount = this.generateRandomInt(0, 1);
        return amount === 0;
    }

    // [0, 1)
    protected generateRandomDouble(): number {
        return Math.random();
    }


    protected generateRandomNullableDouble(): number {
        var myValue = this.generateRandomDouble();
        var randomInt = this.generateRandomInt(1, 10);
        if (randomInt > 7) {
            myValue = null;
        }

        if (randomInt % 2 === 0 && myValue != null) {
            myValue = myValue * -1;
        }

        return myValue;
    }

    protected generateRandomNullableString(myString: string): string {
        var randomInt = this.generateRandomInt(1, 10);
        if (randomInt > 7) {
            myString = null;
        }
        return myString;
    }

    protected getMeaningfulDouble(): number {
        return this.roundTo4Dp(this.generateRandomInt(10, 150) + this.generateRandomDouble());
    }

    protected getMeaningfulPositiveNegativeDouble(): number {
        return this.roundTo4Dp(this.generateRandomInt(-150, 150) + this.generateRandomDouble());
    }

    protected roundTo4Dp(val: number): number {
        return Math.round(val * 10000) / 10000;
    }

    protected getMeaningfulDoubleInRange(min: number, max: number): number {
        return this.roundTo4Dp(this.generateRandomInt(min, max) + this.generateRandomDouble());
    }

    protected getMeaningfulDoubleTest(): number {
        return (Math.round((100 + this.generateRandomDouble()) * 10) / 10) + this.generateRandomDouble() / 1000;
    }

    protected generateRandomDateAndTime(minDays: number, maxDays: number): Date {
        var currentDate = new Date(); // Fix it
        var start = this.addDays(currentDate, minDays);
        var end = this.addDays(currentDate, maxDays);
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    protected addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    protected generateRandomDate(minDays: number, maxDays: number): Date {
        var date = this.generateRandomDateAndTime(minDays, maxDays);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        //return toDateTimeString(date);
    }

    protected toDateTimeString(date: Date) {
        var options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        return date.toLocaleTimeString("en-us", options);
    }

    protected generateCounterparty(): string {
        var counterparties = this.getCounterparties();
        return counterparties[this.generateRandomInt(0, counterparties.length - 1)];
    }

    protected generateCurrency(): string {
        var currencies = this.getCurrencies();
        return currencies[this.generateRandomInt(0, currencies.length - 1)];
    }

    public getRandomItem(ary: any[] | kendo.data.ObservableArray, max?: number): any {
        if (max) {
            return ary[this.generateRandomInt(0, Math.min(max, ary.length - 1))];
        }
        else {
            return ary[this.generateRandomInt(0, ary.length - 1)];
        }
    }

    protected getNotionals(): number[] {
        var notionals = [
            1000000,
            2000000,
            5000000,
            7500000,
            10000000
        ];
        return notionals;
    }
    protected getBidOfferSpreads(): number[] {
        var counterparties = [
            0.1,
            0.15,
            0.2,
            0.25,
            0.3,
            0.35,
            0.4,
            0.5
        ];
        return counterparties;
    }
    protected getCounterparties(): string[] {
        var counterparties = [
            "Goldman Sachs",
            "Societe Generale",
            "Bank of America",
            "RBS",
            "Barcap",
            "JP Morgan",
            "Morgan Stanley",
            "BNP",
            "Lloyds TSB",
            "MUFJ",
            "Rabobank",
            "Deutsche Bank",
            "Credit Suisse",
            "Nomura"
        ];
        return counterparties;
    }

    protected getCurrencies(): string[] {
        var currencies = [
            "EUR",
            "USD",
            "GBP",
            "CHF",
            "CAD",
            "AUD",
            "ZAR"
        ];
        return currencies;
    }

    protected getCountries(): string[] {
        var countries = [
            "Argentina",
            "Australia",
            "Belgium",
            "Brazil",
            "Canada",
            "China",
            "Denmark",
            "Egypt",
            "France",
            "Germany",
            "Holland",
            "Hungary",
            "India",
            "Ireland",
            "Italy",
            "Japan",
            "Kenya",
            "Luxembourg",
            "Portugal",
            "Qatar",
            "Russia",
            "Spain",
            "Thailand"
        ];
        return countries;
    }

    protected getMoodysRatings(): string[] {
        var moodysRatings = [
            "Aaa",
            "Aa1",
            "Aa2",
            "Aa3",
            "A1",
            "A2",
            "A3",
            "Baa1",
            "Baa2",
            "Baa3",
            "Ba1",
            "Ba2",
            "Ba3",
            "B1",
            "B2",
            "B3",
            "Caa",
            "Ca",
            "C",
            "WR",
            "NR",
        ];
        return moodysRatings;
    }





    // for s&P and Fitch we got one of 3 ratings based off the moodys rating
    protected getRatingFromMoodyRating(moodysRating: string): string {
        switch (moodysRating) {
            case "Aaa":
                return this.getRandomItem(["AAA", "AA+"]);
            case "Aa1":
                return this.getRandomItem(["AAA", "AA+", "AA"]);
            case "Aa2":
                return this.getRandomItem(["AA+", "AA", "AA-"]);
            case "Aa3":
                return this.getRandomItem(["AA", "AA-", "A+"]);
            case "A1":
                return this.getRandomItem(["AA-", "A+", "A"]);
            case "A2":
                return this.getRandomItem(["A+", "A", "A-"]);
            case "A3":
                return this.getRandomItem(["A", "A-", "BBB+"]);
            case "Baa1":
                return this.getRandomItem(["A-", "BBB+", "BBB"]);
            case "Baa2":
                return this.getRandomItem(["BBB+", "BBB", "BBB-"]);
            case "Baa3":
                return this.getRandomItem(["BBB", "BBB-", "BB+",]);
            case "Ba1":
                return this.getRandomItem(["BBB-", "BB+", "BB"]);
            case "Ba2":
                return this.getRandomItem(["BB+", "BB", "BB-"]);
            case "Ba3":
                return this.getRandomItem(["BB", "BB-", "B+"]);
            case "B1":
                return this.getRandomItem(["BB-", "B+", "B"]);
            case "B2":
                return this.getRandomItem(["B+", "B", "B-"]);
            case "B3":
                return this.getRandomItem(["B", "B-", "CCC"]);
            case "Caa":
                return this.getRandomItem(["B-", "CCC", "CC"]);
            case "Ca":
                return this.getRandomItem(["CCC", "CC"]);
            case "C":
                return this.getRandomItem(["CC", "D"]);
            case "WR":
                return "SD";
            case "NR":
                return "NR";
        }
    }

    protected getNames(): string[] {
        var names: string[] = [
            "Stacee Dreiling",
            "Cecil Staab",
            "Sheba Dowdy",
            "Loralee Stalker",
            "Sanjuana Kimsey",
            "Shante Hey",
            "Magen Willison",
            "Casimira Tabler",
            "Annemarie Rybicki",
            "Granville Westfall",
            "Colby Troupe",
            "Wei Frith",
            "Sarai Pilgrim",
            "Yael Rich",
            "Hester Bluhm",
            "Season Landreth",
            "Britany Saffell",
            "Kelley Babb",
            "Bradley Chumley",
            "Louella Spiker"
        ];
        return names;
    }
}
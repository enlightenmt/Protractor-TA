import ElementWrapper from "../utilities/wrappers/element-wrapper";
import { by } from "protractor";

export default class BookTicketPage {

    private static _bookTicketPage: BookTicketPage = null;

    protected cmbDepartDate = new ElementWrapper(by.xpath("//select[@name='Date']"));
    protected cmbDepartFrom = new ElementWrapper(by.xpath("//select[@name='DepartStation']"));
    protected cmbArriveAt = new ElementWrapper(by.xpath("//select[@name='ArriveStation']"));
    protected cmbSeatType = new ElementWrapper(by.xpath("//select[@name='SeatType']"));
    protected cmbTicketAmount = new ElementWrapper(by.xpath("//select[@name='TicketAmount']"));
    protected btnBookTicket = new ElementWrapper(by.xpath("//input[@value='Book ticket']"));

    public static getInstance(): BookTicketPage {
		this._bookTicketPage = new BookTicketPage();
		return this._bookTicketPage;
    }

    public async areBookTicketFormElementsDisplayed(): Promise<boolean> {
        try {
            let cmbDepartDateExists = await this.cmbDepartDate.isDisplayed();
            let cmbDepartFromExists = await this.cmbDepartDate.isDisplayed();
            let cmbArriveAtExists = await this.cmbArriveAt.isDisplayed();
            let cmbSeatTypeExists = await this.cmbSeatType.isDisplayed();
            let cmbTicketAmountExists = await this.cmbTicketAmount.isDisplayed();
            let btnBookTicketExists = await this.btnBookTicket.isDisplayed();
            return cmbDepartDateExists && cmbDepartFromExists && cmbArriveAtExists && cmbSeatTypeExists && cmbTicketAmountExists && btnBookTicketExists 
        } catch (err) {
            throw err;
        }
    }
    
}
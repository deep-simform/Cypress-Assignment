import Login from "../../Page Object/Login"
import fillForm from "../../Page Object/FormFill";
require('cypress-file-upload')
describe('template spec', () => {
  it('Main', () => {

    // locators which are use in program
    cy.visit('/web/index.php/auth/login')

    //login
    const user = new Login()
    
    // login page assertion  
    cy.url().should("contain", "login")
    cy.title().should("eq", "OrangeHRM")
    cy.contains("Login")
    user.enterUsername("Admin")
    user.enterPassword("admin123")
    user.clickLoginBtn()

    //successfully login assertion
    cy.url().should("contain", "dashboard")
    cy.contains("Dashboard")


    
    

    // Click on my info button
    user.clickMyInfoButton()

    //check visibility of my info form
    cy.contains("Personal Details")
    cy.url().should("contain", "web/index.php/pim/viewPersonalDetails")

    // Fill My info form
    const fill = new fillForm()
    fill.selectNationality("Indian1")
    fill.selectMaritalStatus("Single")
    fill.enterFirstName("Deep")
    fill.enterMiddleName("Rakeshbhai")
    fill.enterLastName("Patel")
    fill.enterNickName("Deep")
    fill.enterEmploeeId("01")
    fill.enterOtherId("02")
    fill.enterLicenseNo("03")
    fill.enterLicenseExpiryDate("2001-02-22")
    fill.enterssnNo("04")
    fill.enterSinNo("05")
    fill.enterDOB("2001-01-02")
    fill.enterMileteryService("06")
    fill.selectGender("male")
    fill.selectsmoker(true)
    fill.selectBloodGroup("A+")
    fill.clickPersonalInfoSaveBtn()
    fill.ClickCustomFieldSaveBtn()
    cy.contains("Successfully Updated")
    cy.contains("Successfully Saved")
    fill.deleteOldValuesFromTable()

    fill.addattachment("cypress/fixtures/1.png")
    fill.ClickAtteachmentSubmitBtn()
    cy.wait(10000)
    fill.verifyValueInTable("1.png")
    
    fill.addattachment("cypress/fixtures/2.png")
    fill.ClickAtteachmentSubmitBtn()
    cy.wait(10000)
    fill.verifyValueInTable("2.png")

    fill.addattachment("cypress/fixtures/3.png")
    fill.ClickAtteachmentSubmitBtn()
    cy.wait(10000)
    fill.verifyValueInTable("3.png")

    fill.addattachment("cypress/fixtures/4.png")
    fill.ClickAtteachmentSubmitBtn()
    cy.wait(10000)
    fill.verifyValueInTable("4.png")
    
    fill.addattachment("cypress/fixtures/5.png")
    fill.ClickAtteachmentSubmitBtn()
    cy.wait(10000)
    fill.verifyValueInTable("5.png")

    // fill.addattachment("cypress/fixtures/Simform_Wallpaper4.png")
    cy.wait(10000)
    
    cy.contains("(5) Records Found")



  })
})
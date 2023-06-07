// import { should } from "chai"

class fillForm{
    first_name_locator = "//input[@name='firstName']"
    middle_name_locator = "//input[@name='middleName']"
    last_name_locator = "//input[@name='lastName']"
    nick_name_locator = "(//input[contains(@class,'oxd-input')])[5]"
    emploee_id_locator = "(//input[contains(@class,'oxd-input')])[6]"
    other_id_locator = "(//input[contains(@class,'oxd-input')])[7]"
    license_number_locator = "(//input[contains(@class,'oxd-input')])[8]"
    licence_expiry_date_locator = "(//input[contains(@class,'oxd-input')])[9]"
    close_button_of_date_locator = "//div[@class='oxd-date-input-link --close']"
    ssn_number_locator = "(//input[contains(@class,'oxd-input')])[10]"
    sin_number_locator = "(//input[contains(@class,'oxd-input')])[11]"
    dob_locator = "(//input[contains(@class,'oxd-input')])[12]"
    military_service_locator = "(//input[contains(@class,'oxd-input')])[13]"

    natonality_dropdown_locator = "(//div[@class='oxd-select-text-input'])[1]"
    nationality_select_start_locator = "//span[normalize-space()='"
    nationality_select_end_locator = "']"


    marital_status_dropdown_locator = "(//div[@class='oxd-select-text-input'])[2]"
    blood_group_dropdown_locator = "(//div[@class='oxd-select-text-input'])[3]"
    male_locator = "//*[text()='Male']"
    female_locator = "//*[text()='Female']"
    smoker_checkbox_locator = "(//input[@type='checkbox'])[1]"
    attachment_button_locator = "//button[@type='button' and @class='oxd-button oxd-button--medium oxd-button--text']"
    browse_button_locator = "//input[@type='file']"
    commenent_locator = "//textarea"
    bloodgrp_locator_start = "//span[normalize-space()='"
    bloodgrp_locator_end = "']"
    personal_info_save_button_locator = "(//button[@type='submit'])[1]"
    custom_field_save_button_locator = "(//button[@type='submit'])[2]"
    attachments_save_button_locator = "(//button[@type='submit'])[3]"
    marital_status_dropdown_start_locator ="//span[normalize-space()='"
    marital_status_dropdown_end_locator ="']"
    select_all_locator = "(//input[@type='checkbox' and @data-v-6179b72a])[2]"

    //Personal Details
    enterFirstName(firstName)
    {
        cy.xpath(this.first_name_locator).clear()
        cy.xpath(this.first_name_locator).type(firstName).should("have.value",firstName)
    }
    enterMiddleName(middleName)
    {
        cy.xpath(this.middle_name_locator).clear()
        cy.xpath(this.middle_name_locator).type(middleName).should("have.value",middleName)
    }
    enterLastName(lastName)
    {
        cy.xpath(this.last_name_locator).clear()
        cy.xpath(this.last_name_locator).type(lastName).should("have.value",lastName)
    }
    enterNickName(nickName)
    {
        cy.xpath(this.nick_name_locator).clear()
        cy.xpath(this.nick_name_locator).type(nickName).should("have.value",nickName)
    }
    enterEmploeeId(id)
    {
        cy.xpath(this.emploee_id_locator).clear()
        cy.xpath(this.emploee_id_locator).type(id).should("have.value",id)
    }
    enterOtherId(otherId)
    {
        cy.xpath(this.other_id_locator).clear()
        cy.xpath(this.other_id_locator).type(otherId).should("have.value",otherId)
    }
    enterLicenseNo(licenseNo)
    {
        cy.xpath(this.license_number_locator).clear()
        cy.xpath(this.license_number_locator).type(licenseNo).should("have.value",licenseNo)
    }
    enterLicenseExpiryDate(date)
    {
        cy.xpath(this.licence_expiry_date_locator).clear()
        cy.xpath(this.licence_expiry_date_locator).type(date).should("have.value",date)
        cy.xpath(this.close_button_of_date_locator).click()

    }
    enterssnNo(ssnNo)
    {
        cy.xpath(this.ssn_number_locator).clear()
        cy.xpath(this.ssn_number_locator).type(ssnNo).should("have.value",ssnNo)
    }
    enterSinNo(sinNo)
    {
        cy.xpath(this.sin_number_locator).clear()
        cy.xpath(this.sin_number_locator).type(sinNo).should("have.value",sinNo)
    }
    enterMileteryService(milSer)
    {
        cy.xpath(this.military_service_locator).clear()
        cy.xpath(this.military_service_locator).type(milSer).should("have.value",milSer)
    }
    selectNationality(nation)
    {
        let final_nation_select_xpath = this.nationality_select_start_locator + nation + this.nationality_select_end_locator
        cy.xpath(this.natonality_dropdown_locator).click({force:true})
        cy.xpath(final_nation_select_xpath).click({force:true})        
   }
    selectMaritalStatus(status)
    {
        let final_maritial_select_xpath = this.marital_status_dropdown_start_locator+status+this.marital_status_dropdown_end_locator
        cy.xpath(this.marital_status_dropdown_locator).click({force:true})
        cy.xpath(final_maritial_select_xpath).click({force:true})
        cy.contains(status)
    }
    enterDOB(date)
    {
        cy.xpath(this.dob_locator).clear()
        cy.xpath(this.dob_locator).type(date)
        cy.xpath(this.close_button_of_date_locator).click()
        
    }
    selectGender(gender)
    {
        if(gender=="male")
        cy.xpath(this.male_locator).click({force: true})
        else if(gender=="female")
        cy.xpath(this.female_locator).click({force: true})
    }
    selectsmoker(bool)
    {
        if(bool)
        {
        cy.xpath(this.smoker_checkbox_locator).check({force: true})
        }
        else
        {
        cy.xpath(this.smoker_checkbox_locator).uncheck({force: true})
        }
    }
    clickPersonalInfoSaveBtn()
    {
        cy.xpath(this.personal_info_save_button_locator).click({force:true})
    }

    selectBloodGroup(bloodgrp)
    {
        let bloodgrpfinallocator = this.bloodgrp_locator_start+bloodgrp+this.bloodgrp_locator_end
        cy.xpath(this.blood_group_dropdown_locator).click({force: true})
        cy.xpath(bloodgrpfinallocator).click({force: true})
    }
    ClickCustomFieldSaveBtn()
    {
        cy.xpath(this.custom_field_save_button_locator).click({force: true})
    }
    addattachment(file)
    {
        cy.xpath(this.attachment_button_locator).click({force: true})
        cy.xpath(this.browse_button_locator).selectFile(file,{force: true})
    }
    ClickAtteachmentSubmitBtn()
    {
        cy.xpath(this.attachments_save_button_locator).click()
    }
    deleteOldValuesFromTable()
    {
        cy.wait(1000)
        cy.xpath(this.select_all_locator).click({force:true})
        cy.xpath("//*[text()=' Delete Selected ']").click({force: true})
        cy.xpath("//*[text()=' Yes, Delete ']").click({force: true})
    }
    verifyValueInTable(data)
    {
        var totalEntry = cy.xpath("//div[@class='oxd-table-body']")
        cy.get("div[class='oxd-table-body']").should('contain',data)
    }
}

export default fillForm
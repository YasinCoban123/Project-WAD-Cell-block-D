import { ref, watch } from 'vue'

import type { Loan } from '../types/Loan'

const loans = ref<Loan[]>(JSON.parse(localStorage.getItem('loans') || '[]'))

watch(loans, (latest) => {
  localStorage.setItem('loans', JSON.stringify(latest))
}, { deep: true })

export function useLoanings() {

  function addLoan(toolId: number, member: string, startDate: string, endDate: string) {
    const busyLoan = loans.value.find((loan) => loan.ToolID === toolId && !loan.Returned)
    if (busyLoan) return

    loans.value.push({
      id: Date.now(),
      ToolID: toolId,
      member,
      StartDate: startDate,
      EndDate: endDate,
      ConditionNote: '',
      Returned: false,
    })
  }

  function updateLoan(editingloan: Loan) {
    const loan = loans.value.find((item) => item.id === editingloan.id)
    if (loan) {
      loan.member = editingloan.member
      loan.StartDate = editingloan.StartDate
      loan.EndDate = editingloan.EndDate
    }
  }

  function returnLoan(id: number, conditionNote: string) {
    const loan = loans.value.find((item) => item.id === id)
    if (loan) {
      loan.Returned = true
      loan.ConditionNote = conditionNote
    }
  }

  function deleteLoan(id: number) {
    loans.value = loans.value.filter((loan) => loan.id !== id)
  }

  return {
    loans,
    addLoan,
    updateLoan,
    returnLoan,
    deleteLoan,
  }
}
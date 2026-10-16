<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLoanings } from '@/composables/UseLoanings.ts'
import type { Tool } from '@/types/Tool.ts'
import type { Loan } from '@/types/Loan.ts'
import Navbar from '../Navbar.vue'
import Footer from '../Footer.vue'

const route = useRoute()

const tools: Tool[] = JSON.parse(localStorage.getItem('tools') || '[]')

const tool = computed(() =>
  tools.find((t) => String(t.id) === String(route.params.id)),
)

const editingLoan = ref<Loan | null>(null)
const returningId = ref<number | null>(null)
const member = ref('')
const startDate = ref('')
const endDate = ref('')
const conditionNote = ref('')

const {
  loans,
  addLoan: addToLoans,
  updateLoan: updateInLoans,
  returnLoan: returnInLoans,
  deleteLoan,
} = useLoanings()

const toolLoans = computed(() =>
  loans.value.filter((loan) => String(loan.ToolID) === String(route.params.id)),
)
const activeLoan = computed(() => toolLoans.value.find((loan) => !loan.Returned))

function handleSubmit() {
  if (editingLoan.value) {
    handleUpdate()
    return
  }
  handleAdd()
}

function handleAdd() {
  if (!tool.value) return
  addToLoans(tool.value.id, member.value, startDate.value, endDate.value)
  member.value = ''
  startDate.value = ''
  endDate.value = ''
}

function handleUpdate() {
  if (!editingLoan.value) return
  updateInLoans({
    id: editingLoan.value.id,
    ToolID: editingLoan.value.ToolID,
    member: member.value,
    StartDate: startDate.value,
    EndDate: endDate.value,
    ConditionNote: editingLoan.value.ConditionNote,
    Returned: editingLoan.value.Returned,
  })
  cancelEdit()
}

function handleReturn(id: number) {
  returnInLoans(id, conditionNote.value)
  returningId.value = null
  conditionNote.value = ''
}

function startEditing(loan: Loan) {
  editingLoan.value = loan
  member.value = loan.member
  startDate.value = loan.StartDate
  endDate.value = loan.EndDate
}

function cancelEdit() {
  editingLoan.value = null
  member.value = ''
  startDate.value = ''
  endDate.value = ''
}
</script>

<template>
  <Navbar />
  <div class="product-section" v-if="tool">
    <div id="first-product-sect">
      <img :src="tool.image" :alt="tool.name" />
    </div>

    <div id="second-product-sect">
      <h1>{{ tool.name }}</h1>
      <h2>Conditie: {{ tool.Condition }}</h2>
      <p v-if="activeLoan">Uitgeleend aan: {{ activeLoan.member }}</p>
      <p>{{ tool.description }}</p>

      <form v-if="!activeLoan || editingLoan" class="loan-form" @submit.prevent="handleSubmit">
        <input v-model="member" placeholder="Naam" />
        <input v-model="startDate" type="date"/>
        <input v-model="endDate" type="date" />
        <button type="submit">{{ editingLoan ? 'Opslaan' : 'Uitlenen' }}</button>
        <button v-if="editingLoan" type="button" @click="cancelEdit">Annuleren</button>
      </form>

      <ul>
        <li v-for="loan in toolLoans" :key="loan.id">
          <strong>{{ loan.member }}</strong>
          {{ loan.StartDate }} t/m {{ loan.EndDate }}
          <p v-if="loan.Returned">Notitie: {{ loan.ConditionNote }}</p>
          <button v-if="!loan.Returned" @click="startEditing(loan)">Aanpassen</button>
          <button v-if="!loan.Returned" @click="returningId = loan.id">Inleveren</button>
          <button @click="deleteLoan(loan.id)">Verwijderen</button>

          <form v-if="returningId === loan.id" @submit.prevent="handleReturn(loan.id)">
            <textarea v-model="conditionNote" placeholder="Conditienotitie"></textarea>
            <button type="submit">Bevestig inleveren</button>
          </form>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="product-section">
    <h1>Tool niet gevonden</h1>
    <router-link to="/tools">Terug naar overzicht</router-link>
  </div>

  <nav id="GoBackLink">
    <router-link to="/tools">Back to tools</router-link>
  </nav>
  <Footer />
</template>

<style>
#first-product-sect {
  background: url('../../assets/img/workbench.jpg');
}
#GoBackLink {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
#GoBackLink a {
  display: inline-block;
  padding: 1rem 3rem;
  background-color: #ff7a00;
  color: #fff;
  font-weight: bold;
}
.loan-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
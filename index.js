class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  }

  constructor(name, workingHours) {
    this.name = name
    this.workingHours = workingHours || CarService.DefaultWorkingHours

    // if (typeof workingHours === 'object' && Boolean(workingHours?.from)) {
    //   this.workingHours.from = workingHours.from
    // } else {
    //   this.workingHours.from = CarService.DefaultWorkingHours.from
    // }

    // if (typeof workingHours === 'object' && Boolean(workingHours?.till)) {
    //   this.workingHours.till = workingHours.till
    // } else {
    //   this.workingHours.till = CarService.DefaultWorkingHours.till
    // }
  }

  repairCar(carName) {
    let timeData = new Date().getHours()
    let fHour = String(this.workingHours.from).split(':')[0]
    let tHour = String(this.workingHours.till).split(':')[0]

    if (!carName) {
      alert('Вам необходимо указать название машины, чтобы ее отремонтировать')
    } else {
      if (timeData >= Number(fHour) && timeData < Number(tHour)) {
        alert(
          `Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`
        )
      } else {
        alert('К сожалению, мы сейчас закрыты. Приходите завтра.')
      }
    }
  }
}

const newWorker = new CarService('Иван', { from: '9:00', till: '20:00' })
console.log(newWorker.workingHours)

newWorker.repairCar('BMW')

import notificationSound from './assets/alarm.mp3';

export default function playNotificationSound() {
    const audio = new Audio(notificationSound); 
    audio.play().catch(error => console.log('Audio play error:', error));
    console.log("test");
}

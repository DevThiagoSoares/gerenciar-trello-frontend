import Swal from "sweetalert2"

export function TypeAlert (message:string, type: "success" | "error" | "warning" | "info") {
    Swal.fire({
        toast: true,
        icon: `${type}`,
        title: `${message}`,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
}
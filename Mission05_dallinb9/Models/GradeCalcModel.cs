using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission05_dallinb9.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0.0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string Assignments { get; set; }

        [Required]
        [Range(0.0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string Projects { get; set; }

        [Required]
        [Range(0.0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string Quizzes { get; set; }

        [Range(0.0, 100, ErrorMessage = "Value must be between 0 and 100")]
        [Required]
        public string Midterm { get; set; }

        [Range(0.0, 100, ErrorMessage = "Value must be between 0 and 100")]
        [Required]
        public string Final { get; set; }

        [Required]
        [Range(0.0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string INTEX { get; set; }
    }
}

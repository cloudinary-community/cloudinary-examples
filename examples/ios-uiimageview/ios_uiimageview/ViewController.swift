//
//  ViewController.swift
//  ios_uiimageview
//
//  Created by Adi Mizrahi on 14/05/2023.
//

import UIKit
import Cloudinary

class ViewController: UIViewController {

    var cloudinary: CLDCloudinary!

    @IBOutlet weak var cldImageView: CLDUIImageView!

    override func viewDidLoad() {
        super.viewDidLoad()
        initCloudinary()
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        cldImageView.cldSetImage(publicId: "/samples/animals/cat", cloudinary: cloudinary)
    }

    func initCloudinary() {
        let config = CLDConfiguration(cloudName: "dkxtn2tlm", secure: true)
        cloudinary = CLDCloudinary(configuration: config)
    }


}

